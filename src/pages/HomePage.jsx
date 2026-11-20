import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import gsap from 'gsap';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const HomePage = ({ onShowToast }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP Hero entrance animation
    {
      const ctx = gsap.context(() => {
        gsap.from(titleRef.current, {
          y: 60,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.2
        });
      }, heroRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* CINEMATIC HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=90"
            alt="VAYORA Mountain Skyline"
            className="w-full h-full object-cover scale-105 animate-float duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/60" />
        </div>

        {/* Hero Content Container */}
        <div ref={titleRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 mt-12">
          <div className="inline-flex items-center gap-3 bg-forest-800/60 backdrop-blur-md border border-sand-300/20 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-sand-300 font-semibold">The World Is Waiting</span>
          </div>

          <h1 className="editorial-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ivory-100 leading-[1.05]">
            Find Your <span className="italic font-normal text-gold-400">Somewhere.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-ivory-200/90 font-light leading-relaxed">
            Extraordinary places. Thoughtful journeys. Memories that stay with you forever. Experience travel curated like fine art.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link
              to="/destinations"
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest shadow-xl transition-all magnetic-btn"
            >
              Explore Destinations
            </Link>
            <Link
              to="/planner"
              className="w-full sm:w-auto bg-forest-800/80 hover:bg-forest-700 text-ivory-100 border border-sand-300/30 px-8 py-4 rounded-full text-sm uppercase tracking-widest backdrop-blur-md transition-all magnetic-btn"
            >
              Plan Your Journey
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
            <span className="text-[10px] uppercase tracking-widest text-ivory-300">Scroll to Explore</span>
            <div className="w-5 h-9 border-2 border-ivory-300/50 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Curated Destinations</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl font-bold text-ivory-100 mt-2">
              Places That Stay With You.
            </h2>
          </div>
          <p className="max-w-md text-sm text-ivory-300/80 leading-relaxed">
            From hidden volcanic coastlines to tranquil high-alpine sanctuaries, discover locations worth travelling across oceans for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.slice(0, 6).map((dest) => (
            <div
              key={dest.id}
              onClick={() => navigate(`/destinations/${dest.slug}`)}
              className="group relative bg-forest-900 rounded-2xl overflow-hidden border border-sand-300/10 cursor-pointer shadow-xl hover:border-gold-500/40 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <SafeImage
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md text-gold-400 text-xs px-3.5 py-1.5 rounded-full font-medium border border-sand-300/10">
                  {dest.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-sand-300/70">
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
                  <span className="text-xs text-ivory-300/60">From <strong className="text-base text-gold-400 font-semibold">${dest.price}</strong> / person</span>
                  <span className="text-xs font-semibold text-ivory-100 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore <Icons.ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRAVEL EXPERIENCES CATEGORIES */}
      <section className="py-20 bg-forest-900/60 border-y border-sand-300/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Tailored Exploration</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl font-bold text-ivory-100">
              Travel Beyond the Ordinary.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Adventure", count: "12 Journeys", img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80" },
              { name: "Culture", count: "18 Journeys", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" },
              { name: "Luxury Escapes", count: "15 Journeys", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80" },
              { name: "Beaches & Wellness", count: "10 Journeys", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80" },
            ].map((cat, idx) => (
              <Link
                key={idx}
                to={`/experiences?category=${encodeURIComponent(cat.name)}`}
                className="group relative h-64 rounded-2xl overflow-hidden border border-sand-300/10 shadow-lg"
              >
                <SafeImage src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">{cat.count}</span>
                  <h3 className="editorial-heading text-2xl font-bold text-ivory-100">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE JOURNEY EDITORIAL SPLIT */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-forest-900 rounded-3xl overflow-hidden border border-sand-300/10 p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Signature Showcase</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl font-bold text-ivory-100 leading-tight">
              Some Journeys Change Everything.
            </h2>
            <p className="text-sm text-ivory-300/80 leading-relaxed">
              The Swiss Alps & Glacier Express Expedition combines panoramic mountain rail, private helicopter glacier landings, and alpine thermal spa retreats.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sand-300/10">
              <div>
                <span className="text-[10px] uppercase text-ivory-300/60 block">Duration</span>
                <span className="text-sm font-semibold text-ivory-100">7 Days / 6 Nights</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-ivory-300/60 block">Starting From</span>
                <span className="text-sm font-semibold text-gold-400">$4,200 per guest</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/destinations/swiss-alps"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                Explore Journey <Icons.ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] rounded-2xl overflow-hidden">
            <SafeImage
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85"
              alt="Swiss Alps Expedition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY VAYORA PILLARS */}
      <section className="py-20 bg-forest-900/40 border-t border-sand-300/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">The VAYORA Standard</span>
            <h2 className="editorial-heading text-4xl font-bold text-ivory-100">Why Travel With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Icons.Compass, title: "Curated Journeys", desc: "Hand-selected sanctuaries and secluded retreats off the standard tourist path." },
              { icon: Icons.Sparkles, title: "Local Masters", desc: "Exclusive private access to regional artisans, historians, and private guides." },
              { icon: Icons.ShieldCheck, title: "Seamless Flexibility", desc: "Customized step-by-step itineraries tailored to your rhythm." },
              { icon: Icons.Star, title: "Unforgettable Memories", desc: "Every touchpoint is designed to leave an enduring emotional resonance." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-forest-900/80 p-8 rounded-2xl border border-sand-300/10 space-y-4 hover:border-gold-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center text-gold-400">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="editorial-heading text-xl font-bold text-ivory-100">{pillar.title}</h3>
                <p className="text-xs text-ivory-300/70 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-lg mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Traveler Reflections</span>
          <h2 className="editorial-heading text-4xl font-bold text-ivory-100 mt-2">Stories From The Road</h2>
          <p className="text-xs text-ivory-300/60 mt-2">(Concept Feedback for Agency Portfolio Showcase)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "Our Kyoto trip felt like stepping into an intimate poem. The private tea master session was something money usually cannot buy.", author: "Elena R.", role: "Architect & Explorer" },
            { quote: "The Swiss Alps helicopter glacier landing was flawless. VAYORA took care of every fine detail with immense grace.", author: "Julian M.", role: "Creative Director" },
            { quote: "From Uluwatu cliffs to quiet jungle sound sanctuaries, Bali revealed a side we never knew existed.", author: "Sophia & Marc K.", role: "Luxury Travelers" }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex gap-1 text-gold-400">
                  {[...Array(5)].map((_, i) => <Icons.Star key={i} className="w-4 h-4 fill-gold-400" />)}
                </div>
                <p className="editorial-heading text-lg text-ivory-200 italic leading-relaxed">"{item.quote}"</p>
              </div>
              <div className="pt-4 border-t border-sand-300/10">
                <p className="text-sm font-semibold text-ivory-100">{item.author}</p>
                <p className="text-xs text-sand-300/60">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden text-center bg-gradient-to-b from-forest-900 to-forest-950">
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8">
          <h2 className="editorial-heading text-4xl sm:text-6xl font-bold text-ivory-100">
            Your Next Story Starts Somewhere.
          </h2>
          <p className="text-base text-ivory-200/80 font-light max-w-xl mx-auto">
            Let us curate a journey tailored precisely to your spirit of discovery.
          </p>
          <div>
            <Link
              to="/planner"
              className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest shadow-2xl inline-block transition-all magnetic-btn"
            >
              Start Planning Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
