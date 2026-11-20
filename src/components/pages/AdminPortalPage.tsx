import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MembershipApplication, EventItem } from '../../types';
import { 
  Lock, 
  ShieldCheck, 
  Users, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Download, 
  Plus, 
  FileText, 
  ExternalLink,
  Tag,
  Eye,
  AlertCircle
} from 'lucide-react';

export const AdminPortalPage: React.FC = () => {
  const { 
    applications, 
    updateApplicationStatus, 
    members, 
    events, 
    addEvent, 
    showToast,
    setCurrentPage 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'applications' | 'cms-events' | 'directory-sync'>('applications');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'under_review' | 'approved' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Inspecting Application Modal
  const [inspectingApp, setInspectingApp] = useState<MembershipApplication | null>(null);
  const [reviewerNotes, setReviewerNotes] = useState('');
  const [reviewerName, setReviewerName] = useState('Stella-Maris Nnaji (National Secretary)');

  // New Event Form State
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventSubtitle, setNewEventSubtitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventVenue, setNewEventVenue] = useState('Four Points by Sheraton, Victoria Island, Lagos');
  const [newEventCategory, setNewEventCategory] = useState<EventItem['category']>('Workshop & Masterclass');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newEventRegUrl, setNewEventRegUrl] = useState('');
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  // Statistics
  const totalApps = applications.length;
  const pendingApps = applications.filter(a => a.status === 'pending').length;
  const underReviewApps = applications.filter(a => a.status === 'under_review').length;
  const approvedApps = applications.filter(a => a.status === 'approved').length;
  const directoryCount = members.filter(m => m.directoryOptIn).length;

  // Filtered Applications
  const filteredApps = applications.filter(app => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesSearch = 
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.discipline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleDecision = (status: MembershipApplication['status']) => {
    if (!inspectingApp) return;

    updateApplicationStatus(inspectingApp.id, status, reviewerNotes, reviewerName);
    setInspectingApp(null);
    setReviewerNotes('');
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim() || !newEventDate.trim() || !newEventDescription.trim()) return;

    addEvent({
      title: newEventTitle,
      subtitle: newEventSubtitle || undefined,
      date: newEventDate,
      venue: newEventVenue,
      isUpcoming: true,
      category: newEventCategory,
      description: newEventDescription,
      registrationUrl: newEventRegUrl.trim() || undefined,
      highlights: ['Accredited NCMF masterclass training', 'Collaborative production credit certificate'],
      image: '/images/gallery/ncmf-seminar-stage.jpg'
    });

    setIsEventModalOpen(false);
    setNewEventTitle('');
    setNewEventSubtitle('');
    setNewEventDate('');
    setNewEventDescription('');
    setNewEventRegUrl('');
  };

  const exportApplicationsToCSV = () => {
    const headers = ['Reference Number', 'Full Name', 'Email', 'Phone', 'Discipline', 'Experience', 'State', 'Status', 'Directory Opt-In', 'Submitted At', 'Reviewer Notes'];
    const rows = applications.map(a => [
      `"${a.referenceNumber}"`,
      `"${a.fullName}"`,
      `"${a.email}"`,
      `"${a.phone}"`,
      `"${a.discipline}"`,
      `"${a.experienceYears}"`,
      `"${a.stateOfResidence}"`,
      `"${a.status}"`,
      `"${a.directoryOptIn ? 'YES' : 'NO'}"`,
      `"${a.submittedAt}"`,
      `"${(a.reviewerNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NCMF_Membership_Applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Exported applications to CSV successfully!', 'success');
  };

  return (
    <div className="space-y-12 pb-24">
      {/* Top Banner */}
      <section className="relative pt-10 pb-6 border-b border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Lock className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-bold text-amber-400 tracking-wider uppercase">
                Secretariat Operations CMS
              </span>
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Application Vetting & Content Governance
            </h1>
            <p className="text-xs text-slate-400">
              Manage incoming membership registrations, record vetting decisions, and administer public events.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportApplicationsToCSV}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              Export CSV
            </button>
            <button
              onClick={() => setIsEventModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 transition-all shadow-md flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Publish New Event
            </button>
          </div>
        </div>

        {/* Real-time KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-[#0c121e] border border-white/10 space-y-1">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Total Applicants</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-white">{totalApps}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c121e] border border-amber-500/30 space-y-1">
            <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold block">Pending Review</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400">{pendingApps}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c121e] border border-blue-500/30 space-y-1">
            <span className="text-xs text-blue-400 uppercase tracking-wider font-semibold block">Under Vetting</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-blue-400">{underReviewApps}</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c121e] border border-emerald-500/30 space-y-1">
            <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold block">Public Directory</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-emerald-400">{directoryCount}</span>
          </div>
        </div>
      </section>

      {/* Tabs Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'applications'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            Membership Applications Queue ({applications.length})
          </button>

          <button
            onClick={() => setActiveTab('cms-events')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'cms-events'
                ? 'bg-amber-500 text-black shadow-md'
                : 'text-slate-400 hover:text-white bg-white/5'
            }`}
          >
            Events CMS ({events.length})
          </button>
        </div>
      </section>

      {/* Main Tab: Applications Queue */}
      {activeTab === 'applications' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c121e] border border-white/10">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {(['all', 'pending', 'under_review', 'approved', 'rejected'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    statusFilter === st
                      ? 'bg-amber-400 text-black font-bold'
                      : 'text-slate-400 hover:text-white bg-white/5'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search applicant or ref..."
                className="w-full bg-[#141e30] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Applications Table */}
          <div className="rounded-2xl border border-white/10 bg-[#0c121e] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#121927] border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-4">Reference</th>
                    <th className="p-4">Applicant</th>
                    <th className="p-4">Discipline</th>
                    <th className="p-4">Experience</th>
                    <th className="p-4">Directory Opt-In</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {filteredApps.map((app) => (
                    <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-mono font-bold text-amber-400">
                        {app.referenceNumber}
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-white block">{app.fullName}</span>
                        <span className="text-[11px] text-slate-400">{app.email}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200">
                          {app.discipline}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400">
                        {app.experienceYears}
                      </td>
                      <td className="p-4">
                        {app.directoryOptIn ? (
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Opted In
                          </span>
                        ) : (
                          <span className="text-slate-500">Private</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          app.status === 'approved'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : app.status === 'pending'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : app.status === 'under_review'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {app.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400 text-[11px]">
                        {app.submittedAt}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            setInspectingApp(app);
                            setReviewerNotes(app.reviewerNotes || '');
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-500/30 flex items-center gap-1 ml-auto"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Review & Vet
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Events CMS Tab */}
      {activeTab === 'cms-events' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-white">
              Public Event Schedules ({events.length})
            </h3>
            <button
              onClick={() => setIsEventModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Add New Event
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((evt) => (
              <div key={evt.id} className="p-6 rounded-2xl bg-[#0c121e] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {evt.category}
                  </span>
                  <span className="text-xs text-slate-400">{evt.date}</span>
                </div>

                <h4 className="font-display font-bold text-lg text-white">{evt.title}</h4>
                <p className="text-xs text-slate-400">{evt.venue}</p>

                <p className="text-xs text-slate-300 line-clamp-2">{evt.description}</p>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {evt.registrationUrl ? '✅ Registration Active' : '⚠️ No Link (Booking Hidden)'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${evt.isUpcoming ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-500'}`}>
                    {evt.isUpcoming ? 'Upcoming' : 'Archive'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Application Inspection & Decision Modal */}
      {inspectingApp && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setInspectingApp(null)}
        >
          <div 
            className="w-full max-w-2xl bg-[#0c121e] border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {inspectingApp.referenceNumber}
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {inspectingApp.fullName}
                </h3>
              </div>
              <button
                onClick={() => setInspectingApp(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Applicant Profile Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-[#121927] p-4 rounded-2xl border border-white/5">
              <div>
                <span className="text-slate-400 block mb-0.5">Email</span>
                <span className="text-white font-medium break-all">{inspectingApp.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Phone / WhatsApp</span>
                <span className="text-white font-mono">{inspectingApp.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Creative Discipline</span>
                <span className="text-amber-300 font-bold">{inspectingApp.discipline}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Industry Experience</span>
                <span className="text-white">{inspectingApp.experienceYears} ({inspectingApp.stateOfResidence})</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Directory Preference</span>
                <span className="text-white">{inspectingApp.directoryOptIn ? 'Consented to Public Listing' : 'Private'}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Submission Date</span>
                <span className="text-white">{inspectingApp.submittedAt}</span>
              </div>
            </div>

            {/* Statement of Purpose */}
            <div className="space-y-1.5 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider block">
                Applicant Statement & Bio:
              </span>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-slate-200 leading-relaxed">
                {inspectingApp.statementOfPurpose}
              </div>
            </div>

            {/* External Links */}
            {(inspectingApp.portfolioUrl || inspectingApp.imdbUrl) && (
              <div className="flex flex-wrap gap-3 text-xs">
                {inspectingApp.portfolioUrl && (
                  <a
                    href={inspectingApp.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-amber-300 hover:underline flex items-center gap-1 border border-white/10"
                  >
                    View Portfolio / Showreel <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {inspectingApp.imdbUrl && (
                  <a
                    href={inspectingApp.imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-300 hover:underline flex items-center gap-1 border border-yellow-500/20"
                  >
                    View IMDb Profile <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}

            {/* Reviewer Section */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="text-xs font-semibold text-slate-200 block">
                Reviewer Evaluation Notes & Decision Record:
              </label>
              <textarea
                rows={3}
                value={reviewerNotes}
                onChange={(e) => setReviewerNotes(e.target.value)}
                placeholder="Enter notes on credentials verified, guild recommendation, or request for additional documentation..."
                className="w-full bg-[#141e30] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 resize-none"
              />
            </div>

            {/* Decision Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => handleDecision('rejected')}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-red-400 bg-red-950/40 border border-red-500/30 hover:bg-red-900/50 transition-colors flex items-center gap-1.5"
              >
                <XCircle className="w-4 h-4" /> Reject Application
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleDecision('under_review')}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-blue-300 bg-blue-950/40 border border-blue-500/30 hover:bg-blue-900/50 transition-colors flex items-center gap-1.5"
                >
                  <Clock className="w-4 h-4" /> Mark Under Review
                </button>

                <button
                  type="button"
                  onClick={() => handleDecision('approved')}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 transition-all shadow-md flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" /> Approve & Enrol
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Event Modal */}
      {isEventModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsEventModalOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-[#0c121e] border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display font-bold text-xl text-white">Publish New NCMF Event</h3>
              <button onClick={() => setIsEventModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-200">Event Title *</label>
                <input
                  type="text"
                  required
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  placeholder="e.g. Cinematic Directing & Screenplay Lab 2027"
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-200">Date *</label>
                  <input
                    type="text"
                    required
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    placeholder="e.g. March 14, 2027"
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-200">Category</label>
                  <select
                    value={newEventCategory}
                    onChange={(e) => setNewEventCategory(e.target.value as EventItem['category'])}
                    className="w-full bg-[#141e30] border border-white/10 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Annual Seminar">Annual Seminar</option>
                    <option value="Workshop & Masterclass">Workshop & Masterclass</option>
                    <option value="Film Screening">Film Screening</option>
                    <option value="Merit Awards">Merit Awards</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-200">Venue</label>
                <input
                  type="text"
                  value={newEventVenue}
                  onChange={(e) => setNewEventVenue(e.target.value)}
                  placeholder="e.g. Four Points by Sheraton, Lagos"
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-200">Registration Link (Optional)</label>
                <input
                  type="url"
                  value={newEventRegUrl}
                  onChange={(e) => setNewEventRegUrl(e.target.value)}
                  placeholder="https://forms.gle/... (Leave blank if not yet open)"
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
                />
                <span className="text-[10px] text-slate-400">If blank, PRD rule hides booking button until link is supplied</span>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-200">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  placeholder="Brief synopsis of topics, speakers, and schedule..."
                  className="w-full bg-[#141e30] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(false)}
                  className="px-4 py-2 text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 shadow-md"
                >
                  Publish Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
