import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, MapPin, Camera, Tag } from 'lucide-react';

export const GalleryModal: React.FC = () => {
  const { selectedPhoto, setSelectedPhoto, gallery } = useApp();

  if (!selectedPhoto) return null;

  const currentIndex = gallery.findIndex(p => p.id === selectedPhoto.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(gallery[currentIndex - 1]);
    } else {
      setSelectedPhoto(gallery[gallery.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < gallery.length - 1) {
      setSelectedPhoto(gallery[currentIndex + 1]);
    } else {
      setSelectedPhoto(gallery[0]);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={() => setSelectedPhoto(null)}
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black border border-white/20 transition-colors"
          aria-label="Close photo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Frame */}
        <div className="relative w-full bg-slate-950 flex items-center justify-center max-h-[60vh] sm:max-h-[65vh] overflow-hidden group">
          <img
            src={selectedPhoto.image}
            alt={selectedPhoto.title}
            className="w-full h-full object-contain max-h-[60vh] sm:max-h-[65vh]"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black border border-white/10 transition-all opacity-80 hover:opacity-100"
            aria-label="Previous image"
          >
            ❮
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black border border-white/10 transition-all opacity-80 hover:opacity-100"
            aria-label="Next image"
          >
            ❯
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="p-6 sm:p-8 space-y-4 bg-white text-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
              <Tag className="w-3.5 h-3.5" />
              {selectedPhoto.category}
            </span>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-700" />
                {selectedPhoto.eventDate}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-700" />
                {selectedPhoto.location}
              </span>
            </div>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
            {selectedPhoto.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {selectedPhoto.caption}
          </p>

          {selectedPhoto.credits && (
            <p className="text-xs text-slate-400 italic flex items-center gap-1.5 pt-2 border-t border-slate-100">
              <Camera className="w-3.5 h-3.5 text-slate-500" />
              {selectedPhoto.credits}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
