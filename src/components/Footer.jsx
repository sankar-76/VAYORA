import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onShowToast }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      onShowToast("Please enter a valid email address.", "error");
      return;
    }
    setSubmitted(true);
    onShowToast("Thank you for subscribing to VAYORA Dispatch (Demo)", "success");
  };

  return (
    <footer className="bg-forest-950 border-t border-sand-300/10 text-ivory-200/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand Intro */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <span className="editorial-heading text-3xl font-bold tracking-widest text-ivory-100">VAYORA</span>
            <span className="w-2 h-2 rounded-full bg-gold-500"></span>
          </div>
          <p className="text-sm text-ivory-300/70 leading-relaxed max-w-sm">
            VAYORA crafts extraordinary bespoke journeys to the world's most serene and dramatic destinations. Find your somewhere.
          </p>
          <div className="flex items-center gap-4 text-ivory-300">
            <a href="#/about" className="hover:text-gold-400 transition-colors text-xs uppercase tracking-wider">Instagram</a>
            <span>•</span>
            <a href="#/about" className="hover:text-gold-400 transition-colors text-xs uppercase tracking-wider">Vogue Travel</a>
            <span>•</span>
            <a href="#/about" className="hover:text-gold-400 transition-colors text-xs uppercase tracking-wider">Journal</a>
          </div>
        </div>

        {/* Nav Quick Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="editorial-heading text-lg font-semibold text-ivory-100">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/destinations" className="hover:text-gold-400 transition-colors">All Destinations</Link></li>
            <li><Link to="/experiences" className="hover:text-gold-400 transition-colors">Curated Experiences</Link></li>
            <li><Link to="/planner" className="hover:text-gold-400 transition-colors">Travel Planner</Link></li>
            <li><Link to="/my-trips" className="hover:text-gold-400 transition-colors">My Trips Dashboard</Link></li>
          </ul>
        </div>

        {/* Destinations Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="editorial-heading text-lg font-semibold text-ivory-100">Destinations</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/destinations/bali" className="hover:text-gold-400 transition-colors">Bali, Indonesia</Link></li>
            <li><Link to="/destinations/swiss-alps" className="hover:text-gold-400 transition-colors">Swiss Alps</Link></li>
            <li><Link to="/destinations/kyoto" className="hover:text-gold-400 transition-colors">Kyoto, Japan</Link></li>
            <li><Link to="/destinations/santorini" className="hover:text-gold-400 transition-colors">Santorini, Greece</Link></li>
            <li><Link to="/destinations/maldives" className="hover:text-gold-400 transition-colors">Maldives</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="editorial-heading text-lg font-semibold text-ivory-100">The VAYORA Journal</h4>
          <p className="text-sm text-ivory-300/70 leading-relaxed">
            Receive private dispatches on hidden sanctuaries, seasonal journeys, and editorial travel stories.
          </p>

          {submitted ? (
            <div className="p-4 bg-forest-800/80 border border-gold-500/30 rounded-xl text-gold-400 text-sm">
              ✓ You are subscribed to VAYORA Dispatch. (Frontend Demo)
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-forest-900 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider flex-shrink-0 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 border-t border-sand-300/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-300/50 gap-4">
        <p>© {new Date().getFullYear()} VAYORA Experiences Ltd. Concept Portfolio Website.</p>
        <p className="flex items-center gap-1">
          <span>Designed with</span>
          <span className="text-gold-400">♥</span>
          <span>for extraordinary journeys.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
