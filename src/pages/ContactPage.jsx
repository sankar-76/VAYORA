import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';

const ContactPage = ({ onShowToast }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast("Please complete all required fields", "error");
      return;
    }
    setSubmitted(true);
    onShowToast("Message sent to VAYORA Concierge (Demo)", "success");
  };

  return (
    <div className="min-h-screen pt-28 pb-24 max-w-4xl mx-auto px-6 sm:px-8">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Private Inquiry</span>
        <h1 className="editorial-heading text-4xl sm:text-6xl font-bold text-ivory-100">Get In Touch</h1>
        <p className="text-sm text-ivory-300/70">Our travel concierges respond within 24 hours.</p>
      </div>

      <div className="bg-forest-900 border border-sand-300/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <Icons.Sparkles className="w-12 h-12 text-gold-400 mx-auto" />
            <h3 className="editorial-heading text-3xl font-bold text-ivory-100">Message Received</h3>
            <p className="text-xs text-ivory-300/70">Thank you for reaching out. A VAYORA travel designer will respond shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-ivory-300/70 block mb-1">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-ivory-300/70 block mb-1">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-ivory-300/70 block mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="text-xs text-ivory-300/70 block mb-1">Message *</label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
