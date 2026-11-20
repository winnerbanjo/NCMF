import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GalleryPhoto } from '../../types';
import { 
  Film, 
  Award, 
  Calendar, 
  MapPin, 
  Camera, 
  CheckCircle2, 
  Tag, 
  Maximize2,
  Tv,
  Clapperboard,
  Layers
} from 'lucide-react';

export const ProjectsGalleryPage: React.FC = () => {
  const { projects, gallery, setSelectedPhoto, setCurrentPage } = useApp();
  const [galleryFilter, setGalleryFilter] = useState<string>('all');

  const filteredGallery = gallery.filter(photo => {
    if (galleryFilter === 'all') return true;
    return photo.category === galleryFilter;
  });

  return (
    <div className="space-y-20 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
          <Clapperboard className="w-4 h-4 text-amber-400" />
          <span>Cinematic Works & Visual Archives</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          Projects & Official Media Gallery
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Explore the feature films, festival-winning short films, and documented gatherings that showcase NCMF’s 10-year legacy of artistic excellence across Nigeria.
        </p>
      </section>

      {/* Signature Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
            Film & Theatre Productions
          </span>
          <h2 className="font-display font-bold text-3xl text-white">
            Forum Screen & Stage Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400/50 transition-all shadow-xl flex flex-col justify-between"
            >
              {project.image && (
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-md">
                    {project.type}
                  </span>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md">
                    {project.year}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-2xl text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>

                  {project.directorOrLead && (
                    <p className="text-xs font-semibold text-amber-400">
                      {project.directorOrLead}
                    </p>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {project.description}
                  </p>

                  {project.accolades && project.accolades.length > 0 && (
                    <div className="space-y-1.5 pt-3">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                        Recognitions & Highlights:
                      </span>
                      {project.accolades.map((acc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {project.platform && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Tv className="w-4 h-4 text-amber-400" />
                      Platform: <strong className="text-slate-200">{project.platform}</strong>
                    </span>
                    <button
                      onClick={() => setCurrentPage('membership')}
                      className="text-amber-400 font-bold hover:underline"
                    >
                      Join Collaborative Labs →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Photo Gallery Section (Original supplied high-res photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Documented Gatherings
            </span>
            <h2 className="font-display font-bold text-3xl text-white">
              Official Photographic Archive
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Four Points by Sheraton Lagos Merit Awards, leadership convocations, and technical clinics.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'Annual Seminar', label: 'Annual Seminar' },
              { id: 'Merit Awards', label: 'Merit Awards' },
              { id: 'Leadership', label: 'Leadership Portraits' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setGalleryFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  galleryFilter === f.id
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400 transition-all duration-300 shadow-lg flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-amber-500 text-black shadow-xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/70 text-amber-300 backdrop-blur-md border border-amber-500/20">
                  {photo.category}
                </span>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{photo.location}</span>
                  <span className="text-amber-400 font-semibold">{photo.eventDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archival Publishing Protocol Notice (PRD section 7) */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-5 rounded-2xl bg-[#0e1626] border border-amber-500/20 text-xs text-slate-300 space-y-1">
          <span className="font-bold text-amber-300">Archival & Publishing Integrity:</span>
          <p className="leading-relaxed text-slate-400">
            All media displayed above preserves the official event captions, verified dates, and production metadata provided in the NCMF project pack. High-resolution images are archived and cleared under the governance of the Head of Media and National President.
          </p>
        </div>
      </section>
    </div>
  );
};
