import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EventItem } from '../../types';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Film, 
  Users,
  ChevronRight,
  Filter
} from 'lucide-react';

export const ProgrammesEventsPage: React.FC = () => {
  const { events, setCurrentPage } = useApp();
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filteredEvents = events.filter(e => {
    const matchesTab = tab === 'upcoming' ? e.isUpcoming : !e.isUpcoming;
    const matchesCategory = categoryFilter === 'all' || e.category === categoryFilter;
    return matchesTab && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Forum Gatherings & Capacity Building</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
          Programmes, Masterclasses & Summits
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          From our flagship annual <em>In Pursuit of Better</em> convention at Four Points by Sheraton to hands-on directing clinics and film screenings, explore how NCMF powers filmmaker growth.
        </p>
      </section>

      {/* Main Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          {/* Upcoming vs Past Tabs */}
          <div className="flex items-center gap-2 bg-[#0c121e] p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setTab('upcoming')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                tab === 'upcoming'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Upcoming Events ({events.filter(e => e.isUpcoming).length})
            </button>
            <button
              onClick={() => setTab('past')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                tab === 'past'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Past Events Archive ({events.filter(e => !e.isUpcoming).length})
            </button>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-[#0c121e] border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Event Categories</option>
              <option value="Annual Seminar">Annual Seminar</option>
              <option value="Workshop & Masterclass">Workshop & Masterclass</option>
              <option value="Film Screening">Film Screening</option>
              <option value="Merit Awards">Merit Awards</option>
            </select>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="p-12 rounded-3xl bg-[#0c121e] border border-white/10 text-center space-y-4">
            <Calendar className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="font-display font-bold text-xl text-white">No events found in this category</h3>
            <p className="text-xs text-slate-400">Try switching tabs or resetting the category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="group rounded-3xl overflow-hidden bg-[#0c121e] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Event Image Banner */}
                {evt.image && (
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-black shadow-md">
                      {evt.category}
                    </span>

                    {evt.isUpcoming ? (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-black shadow-md animate-pulse">
                        Upcoming Event
                      </span>
                    ) : (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md">
                        Past Programme Archive
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                        <Calendar className="w-4 h-4 text-amber-400" />
                        {evt.date}
                      </span>
                      {evt.time && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {evt.time}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-amber-300 transition-colors">
                      {evt.title}
                    </h3>

                    {evt.subtitle && (
                      <p className="text-xs font-medium text-amber-400/90 italic">
                        {evt.subtitle}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{evt.venue}</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {evt.description}
                    </p>

                    {evt.highlights && evt.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                          Key Features:
                        </span>
                        {evt.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action / Registration Buttons as strictly defined in PRD Section 4 */}
                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    {evt.isUpcoming ? (
                      evt.registrationUrl ? (
                        <a
                          href={evt.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md flex items-center gap-2"
                        >
                          Register Now <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 italic bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                          Registration link pending organiser release
                        </span>
                      )
                    ) : (
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-500/60" /> Completed Programme
                      </span>
                    )}

                    <button
                      onClick={() => setCurrentPage('projects')}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      View Event Gallery & Media <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Flagship Notice Banner */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c2e] via-[#0e1726] to-[#0c121e] border border-amber-500/30 space-y-3">
          <h4 className="font-display font-bold text-xl text-white">
            Hosting an Industry Screening or Co-Production Masterclass?
          </h4>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            NCMF collaborates with international cultural missions, streaming distributors, and film academies to deliver impactful masterclasses.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all"
            >
              Contact Event Secretariat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
