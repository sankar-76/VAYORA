const STORAGE_KEY = "vayora_saved_trips_v1";

export const Storage = {
  getTrips: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to read from LocalStorage", e);
      return [];
    }
  },
  saveTrip: (tripData) => {
    try {
      const current = Storage.getTrips();
      const updated = [tripData, ...current.filter(t => t.id !== tripData.id)];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return true;
    } catch (e) {
      console.error("Failed to save trip", e);
      return false;
    }
  },
  removeTrip: (id) => {
    try {
      const current = Storage.getTrips();
      const filtered = current.filter(t => t.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      return filtered;
    } catch (e) {
      console.error("Failed to remove trip", e);
      return [];
    }
  },
  clearAll: () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      return true;
    } catch (e) {
      return false;
    }
  }
};
