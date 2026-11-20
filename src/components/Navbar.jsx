import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icons from './Icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/destinations", label: "Explore" },
    { path: "/experiences", label: "Experiences" },
    { path: "/planner", label: "Planner" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "glass-nav py-4 shadow-xl" : "bg-gradient-to-b from-forest-950/80 to-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="editorial-heading text-2xl sm:text-3xl font-bold tracking-widest text-ivory-100 group-hover:text-gold-400 transition-colors">
            VAYORA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-wider uppercase font-medium transition-all relative py-1 ${isActive(link.path) ? "text-gold-400" : "text-ivory-200/80 hover:text-white"}`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-400 rounded-full animate-fadeIn" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/my-trips"
            className="text-xs uppercase tracking-widest text-ivory-200 hover:text-gold-400 flex items-center gap-2 transition-colors px-3 py-2 rounded-lg hover:bg-forest-800/40"
          >
            <Icons.Compass className="w-4 h-4" />
            My Trips
          </Link>

          <Link
            to="/planner"
            className="magnetic-btn bg-gold-500 hover:bg-gold-400 text-forest-950 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg hover:shadow-gold-500/20"
          >
            Plan Journey
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ivory-100 hover:text-gold-400 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-forest-950/95 backdrop-blur-2xl z-50 flex flex-col px-8 py-10 space-y-6 animate-fadeIn border-t border-sand-300/10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`editorial-heading text-2xl ${isActive(link.path) ? "text-gold-400 font-bold" : "text-ivory-200 hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-6 border-t border-sand-300/10 flex flex-col gap-4">
            <Link
              to="/my-trips"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 py-3 border border-sand-300/30 rounded-xl text-ivory-100 hover:bg-forest-800"
            >
              <Icons.Compass className="w-5 h-5 text-gold-400" />
              View Saved Trips
            </Link>
            <Link
              to="/planner"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3.5 bg-gold-500 text-forest-950 font-bold rounded-xl tracking-wider uppercase"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
