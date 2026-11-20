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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={() => setSelectedPhoto(null)}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0c121e] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/10 transition-colors"
          aria-label="Close photo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Frame */}
        <div className="relative w-full bg-black flex items-center justify-center max-h-[60vh] sm:max-h-[65vh] overflow-hidden group">
          <img
            src={selectedPhoto.image}
            alt={selectedPhoto.title}
            className="w-full h-full object-contain max-h-[60vh] sm:max-h-[65vh]"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-amber-500 hover:text-black border border-white/10 transition-all opacity-80 hover:opacity-100"
            aria-label="Previous image"
          >
            ❮
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-amber-500 hover:text-black border border-white/10 transition-all opacity-80 hover:opacity-100"
            aria-label="Next image"
          >
            ❯
          </button>
        </div>

        {/* Caption & Metadata */}
        <div className="p-6 sm:p-8 space-y-4 bg-[#0a0f1b]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Tag className="w-3.5 h-3.5" />
              {selectedPhoto.category}
            </span>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                {selectedPhoto.eventDate}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {selectedPhoto.location}
              </span>
            </div>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            {selectedPhoto.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {selectedPhoto.caption}
          </p>

          {selectedPhoto.credits && (
            <p className="text-xs text-slate-500 italic flex items-center gap-1.5 pt-2 border-t border-white/5">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              {selectedPhoto.credits}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
