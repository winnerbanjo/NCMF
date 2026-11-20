import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Tv, 
  Clapperboard, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';

export const ProjectsGalleryPage: React.FC = () => {
  const { projects, gallery, setSelectedPhoto, setCurrentPage } = useApp();
  const [galleryFilter, setGalleryFilter] = useState<string>('all');

  const filteredGallery = gallery.filter(photo => {
    if (galleryFilter === 'all') return true;
    return photo.category === galleryFilter;
  });

  return (
    <div className="space-y-20 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <Clapperboard className="w-4 h-4 text-slate-700" />
          <span>Cinematic Works & Visual Archives</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          Projects & Official Media Gallery
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Explore the feature films, festival-winning short films, and documented gatherings that showcase NCMF’s 10-year legacy of artistic excellence across Nigeria.
        </p>
      </section>

      {/* Signature Projects Section (Clean White Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
            Film & Theatre Productions
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-950">
            Forum Screen & Stage Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {project.image && (
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white shadow-sm">
                    {project.type}
                  </span>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 backdrop-blur-sm border border-slate-200">
                    {project.year}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-2xl text-slate-950">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                      {project.status}
                    </span>
                  </div>

                  {project.directorOrLead && (
                    <p className="text-xs font-semibold text-slate-700">
                      {project.directorOrLead}
                    </p>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {project.description}
                  </p>

                  {project.accolades && project.accolades.length > 0 && (
                    <div className="space-y-1.5 pt-3">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                        Recognitions & Highlights:
                      </span>
                      {project.accolades.map((acc, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                          <span>{acc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {project.platform && (
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Tv className="w-4 h-4 text-slate-700" />
                      Platform: <strong className="text-slate-900">{project.platform}</strong>
                    </span>
                    <button
                      onClick={() => setCurrentPage('membership')}
                      className="text-slate-900 font-bold hover:underline"
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

      {/* Official Photo Gallery Section (Original High-Res Photos on Clean White Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              Documented Gatherings
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-950">
              Official Photographic Archive
            </h2>
            <p className="text-xs text-slate-600 mt-1">
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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  galleryFilter === f.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white text-slate-900 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 backdrop-blur-sm border border-slate-200">
                  {photo.category}
                </span>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-950 line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{photo.location}</span>
                  <span className="text-slate-700 font-semibold">{photo.eventDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Archival Media Notice */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
          <span className="font-bold text-slate-900">Official Media Archives:</span>
          <p className="leading-relaxed text-slate-500">
            Photographs from NCMF gatherings, seminars, and creative award sessions in Lagos. Detailed subject and event identifications will be updated as further archives are catalogued by the media secretariat.
          </p>
        </div>
      </section>
    </div>
  );
};
