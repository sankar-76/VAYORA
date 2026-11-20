import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
import Icons from '../components/Icons';
import SafeImage from '../components/SafeImage';
import { DESTINATIONS, EXPERIENCES } from '../data/travelData';
import { Storage } from '../utils/storage';

const MyTripsPage = ({ onShowToast }) => {
  const [trips, setTrips] = useState([]);
  const [confirmClear, setConfirmClear] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTrips(Storage.getTrips());
  }, []);

  const handleRemove = (id) => {
    const updated = Storage.removeTrip(id);
    setTrips(updated);
    onShowToast("Trip removed from saved itineraries", "info");
  };

  const handleClearAll = () => {
    Storage.clearAll();
    setTrips([]);
    setConfirmClear(false);
    onShowToast("All saved trips cleared", "info");
  };

  return (
    <div className="min-h-screen pt-28 pb-24 max-w-6xl mx-auto px-6 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Saved Journeys</span>
          <h1 className="editorial-heading text-4xl sm:text-5xl font-bold text-ivory-100 mt-1">My Trips Dashboard</h1>
        </div>

        {trips.length > 0 && !confirmClear && (
          <button
            onClick={() => setConfirmClear(true)}
            className="self-start sm:self-auto text-xs text-red-400 hover:text-red-300 flex items-center gap-2 border border-red-500/20 px-4 py-2 rounded-xl transition-colors"
          >
            <Icons.Trash2 className="w-4 h-4" /> Clear All Trips
          </button>
        )}

        {trips.length > 0 && confirmClear && (
          <div className="flex items-center gap-3 bg-forest-900 border border-red-500/30 px-4 py-2 rounded-xl animate-fadeIn">
            <span className="text-xs text-ivory-200">Clear all saved trips?</span>
            <button
              onClick={handleClearAll}
              className="text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 font-semibold px-3 py-1 rounded-lg transition-colors"
            >
              Confirm
            </button>
            <button
              onClick={() => setConfirmClear(false)}
              className="text-xs text-ivory-300/70 hover:text-white px-2 py-1"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {trips.length === 0 ? (
        <div className="text-center py-24 bg-forest-900/60 rounded-3xl border border-sand-300/10 space-y-6">
          <Icons.Compass className="w-16 h-16 text-gold-400 mx-auto opacity-40" />
          <div className="space-y-2">
            <h3 className="editorial-heading text-3xl font-bold text-ivory-100">No Journeys Planned Yet</h3>
            <p className="text-xs text-ivory-300/70 max-w-sm mx-auto">
              Use our custom Travel Planner wizard to design and store your dream bespoke itinerary.
            </p>
          </div>
          <Link
            to="/planner"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest shadow-xl"
          >
            Create First Plan
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trips.map((t) => (
            <div key={t.id} className="bg-forest-900 rounded-3xl p-8 border border-sand-300/10 space-y-6 shadow-2xl relative">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider bg-forest-800 px-3 py-1 rounded-full border border-sand-300/10">
                    {t.id}
                  </span>
                  <h3 className="editorial-heading text-3xl font-bold text-ivory-100 capitalize mt-3">{t.destination}</h3>
                </div>
                <span className="text-xs font-semibold bg-gold-500/10 text-gold-400 px-3 py-1 rounded-full border border-gold-500/20">
                  {t.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs text-ivory-200 border-y border-sand-300/10 py-4">
                <div>
                  <span className="text-ivory-300/60 block">Travel Dates</span>
                  <span className="font-semibold">{t.startDate || "Not set"}</span>
                </div>
                <div>
                  <span className="text-ivory-300/60 block">Travellers</span>
                  <span className="font-semibold">{t.adults} Adults, {t.children} Children</span>
                </div>
                <div>
                  <span className="text-ivory-300/60 block">Style</span>
                  <span className="font-semibold">{t.style}</span>
                </div>
                <div>
                  <span className="text-ivory-300/60 block">Total Est.</span>
                  <span className="font-bold text-gold-400 text-sm">${t.totalPrice}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-ivory-300/50">Guest: {t.fullName}</span>
                <button
                  onClick={() => handleRemove(t.id)}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <Icons.Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTripsPage;
