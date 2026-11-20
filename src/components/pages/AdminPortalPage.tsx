import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MembershipApplication, EventItem } from '../../types';
import { 
  Lock, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Download, 
  Plus, 
  ExternalLink,
  Eye
} from 'lucide-react';

export const AdminPortalPage: React.FC = () => {
  const { 
    applications, 
    updateApplicationStatus, 
    members, 
    events, 
    addEvent, 
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'applications' | 'cms-events'>('applications');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'under_review' | 'approved' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Inspecting Application Modal
  const [inspectingApp, setInspectingApp] = useState<MembershipApplication | null>(null);
  const [reviewerNotes, setReviewerNotes] = useState('');
  const [reviewerName] = useState('Stella-Maris Nnaji (National Secretary)');

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
    <div className="space-y-12 pb-24 bg-white text-slate-900">
      {/* Top Banner */}
      <section className="relative pt-10 pb-6 border-b border-slate-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                <Lock className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-bold text-slate-700 tracking-wider uppercase">
                Secretariat Operations CMS
              </span>
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-950">
              Application Vetting & Content Governance
            </h1>
            <p className="text-xs text-slate-500">
              Manage incoming membership registrations, record vetting decisions, and administer public events.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportApplicationsToCSV}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-slate-700" />
              Export CSV
            </button>
            <button
              onClick={() => setIsEventModalOpen(true)}
              className="px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-black transition-all shadow-xs flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Publish New Event
            </button>
          </div>
        </div>

        {/* Real-time KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Total Applicants</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-slate-950">{totalApps}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">Pending Review</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-slate-900">{pendingApps}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-slate-700 uppercase tracking-wider font-semibold block">Under Vetting</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-slate-900">{underReviewApps}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-xs text-emerald-700 uppercase tracking-wider font-semibold block">Public Directory</span>
            <span className="font-display font-bold text-2xl sm:text-3xl text-emerald-800">{directoryCount}</span>
          </div>
        </div>
      </section>

      {/* Tabs Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'applications'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Membership Applications Queue ({applications.length})
          </button>

          <button
            onClick={() => setActiveTab('cms-events')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'cms-events'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {(['all', 'pending', 'under_review', 'approved', 'rejected'] as const).map(st => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-all ${
                    statusFilter === st
                      ? 'bg-slate-900 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
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
                className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 shadow-xs"
              />
            </div>
          </div>

          {/* Applications Table */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase tracking-wider font-semibold">
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
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredApps.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-mono font-bold text-slate-900">
                        {app.referenceNumber}
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-slate-950 block">{app.fullName}</span>
                        <span className="text-[11px] text-slate-500">{app.email}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                          {app.discipline}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">
                        {app.experienceYears}
                      </td>
                      <td className="p-4">
                        {app.directoryOptIn ? (
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Opted In
                          </span>
                        ) : (
                          <span className="text-slate-400">Private</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          app.status === 'approved'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : app.status === 'pending'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : app.status === 'under_review'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {app.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500 text-[11px]">
                        {app.submittedAt}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            setInspectingApp(app);
                            setReviewerNotes(app.reviewerNotes || '');
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs border border-slate-200 flex items-center gap-1 ml-auto"
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
            <h3 className="font-display font-bold text-xl text-slate-950">
              Public Event Schedules ({events.length})
            </h3>
            <button
              onClick={() => setIsEventModalOpen(true)}
              className="px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-black transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Add New Event
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((evt) => (
              <div key={evt.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                    {evt.category}
                  </span>
                  <span className="text-xs text-slate-500">{evt.date}</span>
                </div>

                <h4 className="font-display font-bold text-lg text-slate-950">{evt.title}</h4>
                <p className="text-xs text-slate-500">{evt.venue}</p>

                <p className="text-xs text-slate-600 line-clamp-2">{evt.description}</p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    {evt.registrationUrl ? '✅ Registration Active' : '⚠️ No Link (Booking Hidden)'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${evt.isUpcoming ? 'text-emerald-800 bg-emerald-100' : 'text-slate-500'}`}>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setInspectingApp(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-slate-600">
                  {inspectingApp.referenceNumber}
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-950">
                  {inspectingApp.fullName}
                </h3>
              </div>
              <button
                onClick={() => setInspectingApp(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            {/* Applicant Profile Grid */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <span className="text-slate-500 block mb-0.5">Email</span>
                <span className="text-slate-900 font-medium break-all">{inspectingApp.email}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Phone / WhatsApp</span>
                <span className="text-slate-900 font-mono font-medium">{inspectingApp.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Creative Discipline</span>
                <span className="text-slate-900 font-bold">{inspectingApp.discipline}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Industry Experience</span>
                <span className="text-slate-900">{inspectingApp.experienceYears} ({inspectingApp.stateOfResidence})</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Directory Preference</span>
                <span className="text-slate-900">{inspectingApp.directoryOptIn ? 'Consented to Public Listing' : 'Private'}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Submission Date</span>
                <span className="text-slate-900">{inspectingApp.submittedAt}</span>
              </div>
            </div>

            {/* Statement of Purpose */}
            <div className="space-y-1.5 text-xs">
              <span className="text-slate-600 font-bold uppercase tracking-wider block">
                Applicant Statement & Bio:
              </span>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 leading-relaxed">
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
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:underline flex items-center gap-1 border border-slate-200"
                  >
                    View Portfolio / Showreel <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {inspectingApp.imdbUrl && (
                  <a
                    href={inspectingApp.imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:underline flex items-center gap-1 border border-slate-200"
                  >
                    View IMDb Profile <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}

            {/* Reviewer Section */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="text-xs font-semibold text-slate-700 block">
                Reviewer Evaluation Notes & Decision Record:
              </label>
              <textarea
                rows={3}
                value={reviewerNotes}
                onChange={(e) => setReviewerNotes(e.target.value)}
                placeholder="Enter notes on credentials verified, guild recommendation, or request for additional documentation..."
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 resize-none"
              />
            </div>

            {/* Decision Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleDecision('rejected')}
                className="px-4 py-2.5 rounded-full text-xs font-bold text-red-700 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors flex items-center gap-1.5"
              >
                <XCircle className="w-4 h-4" /> Reject Application
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleDecision('under_review')}
                  className="px-4 py-2.5 rounded-full text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors flex items-center gap-1.5"
                >
                  <Clock className="w-4 h-4" /> Mark Under Review
                </button>

                <button
                  type="button"
                  onClick={() => handleDecision('approved')}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-black transition-all shadow-xs flex items-center gap-1.5"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsEventModalOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-display font-bold text-xl text-slate-950">Publish New NCMF Event</h3>
              <button onClick={() => setIsEventModalOpen(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Event Title *</label>
                <input
                  type="text"
                  required
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  placeholder="e.g. Cinematic Directing & Screenplay Lab 2027"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Date *</label>
                  <input
                    type="text"
                    required
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    placeholder="e.g. March 14, 2027"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Category</label>
                  <select
                    value={newEventCategory}
                    onChange={(e) => setNewEventCategory(e.target.value as EventItem['category'])}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900"
                  >
                    <option value="Annual Seminar">Annual Seminar</option>
                    <option value="Workshop & Masterclass">Workshop & Masterclass</option>
                    <option value="Film Screening">Film Screening</option>
                    <option value="Merit Awards">Merit Awards</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Venue</label>
                <input
                  type="text"
                  value={newEventVenue}
                  onChange={(e) => setNewEventVenue(e.target.value)}
                  placeholder="e.g. Four Points by Sheraton, Lagos"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Registration Link (Optional)</label>
                <input
                  type="url"
                  value={newEventRegUrl}
                  onChange={(e) => setNewEventRegUrl(e.target.value)}
                  placeholder="https://forms.gle/... (Leave blank if not yet open)"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:border-slate-900"
                />
                <span className="text-[10px] text-slate-400">If blank, registration button remains hidden until link is supplied</span>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                  placeholder="Brief synopsis of topics, speakers, and schedule..."
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEventModalOpen(false)}
                  className="px-4 py-2 text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full font-bold text-white bg-slate-900 hover:bg-black shadow-xs"
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
