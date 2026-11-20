import React, { useEffect } from 'react';
import Icons from './Icons';

const Toast = ({ message, type = "info", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-forest-800 border border-sand-300/30 text-ivory-100 px-5 py-4 rounded-xl shadow-2xl animate-fadeIn">
      <Icons.Sparkles className="text-gold-500 w-5 h-5 flex-shrink-0" />
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="ml-3 text-ivory-300 hover:text-white">
        <Icons.X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
