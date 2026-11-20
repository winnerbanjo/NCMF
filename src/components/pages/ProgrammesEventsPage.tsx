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
  ChevronRight,
  Filter
} from 'lucide-react';

export const ProgrammesEventsPage: React.FC = () => {
  const { events, setCurrentPage } = useApp();
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredEvents = events.filter(e => {
    const matchesTab = tab === 'upcoming' ? e.isUpcoming : !e.isUpcoming;
    const matchesCategory = categoryFilter === 'all' || e.category === categoryFilter;
    return matchesTab && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-24 bg-white text-slate-900">
      {/* Page Header */}
      <section className="relative pt-12 pb-8 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold mb-6">
          <Calendar className="w-4 h-4 text-slate-700" />
          <span>Forum Gatherings & Capacity Building</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-tight mb-6">
          Programmes, Masterclasses & Summits
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          From our flagship annual <em>In Pursuit of Better</em> convention at Four Points by Sheraton to hands-on directing clinics and film screenings, explore how NCMF powers filmmaker growth.
        </p>
      </section>

      {/* Main Filter Controls (Clean Light Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          {/* Upcoming vs Past Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200">
            <button
              onClick={() => setTab('upcoming')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                tab === 'upcoming'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Upcoming Events ({events.filter(e => e.isUpcoming).length})
            </button>
            <button
              onClick={() => setTab('past')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                tab === 'past'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Past Events Archive ({events.filter(e => !e.isUpcoming).length})
            </button>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-600" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-white border border-slate-300 rounded-xl px-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-900 shadow-sm"
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

      {/* Events Grid (Clean White Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
            <Calendar className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="font-display font-bold text-xl text-slate-950">No events found in this category</h3>
            <p className="text-xs text-slate-500">Try switching tabs or resetting the category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                {/* Event Image Banner */}
                {evt.image && (
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white shadow-sm">
                      {evt.category}
                    </span>

                    {evt.isUpcoming ? (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm">
                        Upcoming Event
                      </span>
                    ) : (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-slate-900 backdrop-blur-sm border border-slate-200">
                        Past Programme
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
                        <Calendar className="w-4 h-4 text-slate-700" />
                        {evt.date}
                      </span>
                      {evt.time && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {evt.time}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-slate-950">
                      {evt.title}
                    </h3>

                    {evt.subtitle && (
                      <p className="text-xs font-medium text-slate-700">
                        {evt.subtitle}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>{evt.venue}</span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {evt.description}
                    </p>

                    {evt.highlights && evt.highlights.length > 0 && (
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                          Key Features:
                        </span>
                        {evt.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action / Registration Buttons as strictly defined in PRD Section 4 */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    {evt.isUpcoming ? (
                      evt.registrationUrl ? (
                        <a
                          href={evt.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-black transition-all shadow-sm flex items-center gap-2"
                        >
                          Register Now <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500 italic bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                          Registration link pending organiser release
                        </span>
                      )
                    ) : (
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-slate-600" /> Completed Programme
                      </span>
                    )}

                    <button
                      onClick={() => setCurrentPage('projects')}
                      className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
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
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-display font-bold text-xl text-slate-950">
            Hosting an Industry Screening or Co-Production Masterclass?
          </h4>
          <p className="text-xs text-slate-600 max-w-xl mx-auto">
            NCMF collaborates with international cultural missions, streaming distributors, and film academies to deliver impactful masterclasses.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 border border-slate-300 transition-all shadow-sm"
            >
              Contact Event Secretariat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
