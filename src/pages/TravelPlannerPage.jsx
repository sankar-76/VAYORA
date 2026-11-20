import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';
import { Storage } from '../utils/storage';

const TravelPlannerPage = ({ onShowToast }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialDestination = searchParams.get("destination") || "bali";

  // Form State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: initialDestination,
    startDate: "",
    endDate: "",
    adults: 2,
    children: 0,
    style: "Comfort",
    interests: ["Beaches", "Culture"],
    fullName: "",
    email: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists ? prev.interests.filter(i => i !== interest) : [...prev.interests, interest]
      };
    });
  };

  // Cost Calculation Engine
  const calculatedCost = useMemo(() => {
    const destObj = DESTINATIONS.find(d => d.slug === formData.destination) || DESTINATIONS[0];
    let base = destObj.price;
    
    let multiplier = 1.0;
    if (formData.style === "Luxury") multiplier = 1.6;
    if (formData.style === "Adventure") multiplier = 1.2;
    if (formData.style === "Budget") multiplier = 0.8;

    const totalGuests = Number(formData.adults) + (Number(formData.children) * 0.5);
    return Math.round(base * multiplier * totalGuests);
  }, [formData.destination, formData.style, formData.adults, formData.children]);

  // Validation
  const validateStep = () => {
    const newErrors = {};
    if (step === 2) {
      if (!formData.startDate) newErrors.startDate = "Select departure date";
      if (!formData.endDate) newErrors.endDate = "Select return date";
      if (formData.startDate && formData.endDate && new Date(formData.endDate) <= new Date(formData.startDate)) {
        newErrors.endDate = "Return date must be after departure date";
      }
    }
    if (step === 7) {
      if (!formData.fullName) newErrors.fullName = "Full name required";
      if (!formData.email || !formData.email.includes("@")) newErrors.email = "Valid email required";
      if (!formData.phone) newErrors.phone = "Phone number required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    const bookingRef = `VYR-${Math.floor(100000 + Math.random() * 900000)}`;
    const tripObj = {
      id: bookingRef,
      ...formData,
      totalPrice: calculatedCost,
      createdAt: new Date().toISOString(),
      status: "Demo Plan"
    };

    Storage.saveTrip(tripObj);
    onShowToast(`Journey saved under reference ${bookingRef}!`, "success");
    navigate("/my-trips");
  };

  return (
    <div className="min-h-screen pt-28 pb-24 max-w-4xl mx-auto px-6 sm:px-8">
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Step {step} of 7</span>
        <h1 className="editorial-heading text-4xl font-bold text-ivory-100">Tailor Your Journey</h1>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-forest-900 h-2 rounded-full mb-12 overflow-hidden border border-sand-300/10">
        <div className="bg-gold-500 h-full transition-all duration-500" style={{ width: `${(step / 7) * 100}%` }} />
      </div>

      <div className="bg-forest-900 border border-sand-300/10 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-8">
        {/* STEP 1: DESTINATION */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">1. Select Destination</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESTINATIONS.map(d => (
                <div
                  key={d.slug}
                  onClick={() => setFormData({ ...formData, destination: d.slug })}
                  className={`p-4 rounded-xl border cursor-pointer flex items-center gap-4 transition-all ${formData.destination === d.slug ? "border-gold-500 bg-forest-800" : "border-sand-300/10 bg-forest-950"}`}
                >
                  <SafeImage src={d.heroImage} alt={d.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-bold text-ivory-100 text-sm">{d.name}</h4>
                    <p className="text-xs text-sand-300/60">{d.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: DATES */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">2. Travel Dates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-ivory-300/70">Departure Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                />
                {errors.startDate && <p className="text-xs text-red-400">{errors.startDate}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs text-ivory-300/70">Return Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                />
                {errors.endDate && <p className="text-xs text-red-400">{errors.endDate}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: TRAVELLERS */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">3. Select Travellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-forest-950 p-6 rounded-2xl border border-sand-300/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-ivory-100 text-sm">Adults</h4>
                  <p className="text-xs text-ivory-300/60">Age 13+</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                    className="w-8 h-8 rounded-full bg-forest-800 text-ivory-100 flex items-center justify-center font-bold"
                  >-</button>
                  <span className="font-bold text-gold-400">{formData.adults}</span>
                  <button
                    onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
                    className="w-8 h-8 rounded-full bg-forest-800 text-ivory-100 flex items-center justify-center font-bold"
                  >+</button>
                </div>
              </div>

              <div className="bg-forest-950 p-6 rounded-2xl border border-sand-300/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-ivory-100 text-sm">Children</h4>
                  <p className="text-xs text-ivory-300/60">Age 0-12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                    className="w-8 h-8 rounded-full bg-forest-800 text-ivory-100 flex items-center justify-center font-bold"
                  >-</button>
                  <span className="font-bold text-gold-400">{formData.children}</span>
                  <button
                    onClick={() => setFormData({ ...formData, children: formData.children + 1 })}
                    className="w-8 h-8 rounded-full bg-forest-800 text-ivory-100 flex items-center justify-center font-bold"
                  >+</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: STYLE */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">4. Travel Style</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Budget", "Comfort", "Luxury", "Adventure"].map(s => (
                <button
                  key={s}
                  onClick={() => setFormData({ ...formData, style: s })}
                  className={`p-6 rounded-2xl border text-left transition-all ${formData.style === s ? "border-gold-500 bg-forest-800" : "border-sand-300/10 bg-forest-950"}`}
                >
                  <h4 className="font-bold text-ivory-100 text-base">{s}</h4>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: INTERESTS */}
        {step === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">5. Choose Interests</h2>
            <div className="flex flex-wrap gap-3">
              {["Beaches", "Mountains", "Food", "Culture", "Adventure", "Relaxation", "Photography", "Wildlife"].map(interest => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-5 py-3 rounded-xl text-xs font-semibold transition-all ${formData.interests.includes(interest) ? "bg-gold-500 text-forest-950" : "bg-forest-950 text-ivory-200 border border-sand-300/10"}`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: REVIEW */}
        {step === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">6. Review Plan & Estimate</h2>
            <div className="bg-forest-950 p-6 rounded-2xl space-y-4 text-xs text-ivory-200 border border-sand-300/10">
              <div className="flex justify-between border-b border-sand-300/10 pb-2">
                <span className="text-ivory-300/60">Destination</span>
                <span className="font-bold text-ivory-100 uppercase">{formData.destination}</span>
              </div>
              <div className="flex justify-between border-b border-sand-300/10 pb-2">
                <span className="text-ivory-300/60">Dates</span>
                <span>{formData.startDate || "TBD"} to {formData.endDate || "TBD"}</span>
              </div>
              <div className="flex justify-between border-b border-sand-300/10 pb-2">
                <span className="text-ivory-300/60">Travellers</span>
                <span>{formData.adults} Adults, {formData.children} Children</span>
              </div>
              <div className="flex justify-between border-b border-sand-300/10 pb-2">
                <span className="text-ivory-300/60">Style</span>
                <span>{formData.style}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-sm font-bold text-ivory-100">Estimated Total</span>
                <span className="editorial-heading text-2xl font-bold text-gold-400">${calculatedCost}</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: GUEST DETAILS */}
        {step === 7 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
            <h2 className="editorial-heading text-2xl font-bold text-ivory-100">7. Save Journey Details</h2>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-ivory-300/70 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Lady Eleanor Vance"
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                />
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-xs text-ivory-300/70 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="eleanor@example.com"
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-xs text-ivory-300/70 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-forest-950 border border-sand-300/20 rounded-xl px-4 py-3 text-sm text-ivory-100 focus:outline-none focus:border-gold-400"
                />
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="p-4 bg-forest-950/80 rounded-xl text-xs text-sand-300/60 border border-sand-300/10">
              ℹ Demo Notice: This is a frontend simulation. No actual payments or room holds will be processed.
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl"
            >
              Confirm & Save Journey
            </button>
          </form>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-sand-300/10">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-2.5 rounded-xl text-xs text-ivory-200 border border-sand-300/20 hover:bg-forest-800"
            >
              Back
            </button>
          )}
          {step < 7 && (
            <button
              onClick={handleNext}
              className="ml-auto bg-gold-500 text-forest-950 font-bold px-8 py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-gold-400"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelPlannerPage;
