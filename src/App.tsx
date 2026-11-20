import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';
import { LeaderModal } from './components/common/LeaderModal';
import { GalleryModal } from './components/common/GalleryModal';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { LeadershipPage } from './components/pages/LeadershipPage';
import { MembershipPage } from './components/pages/MembershipPage';
import { ProgrammesEventsPage } from './components/pages/ProgrammesEventsPage';
import { ProjectsGalleryPage } from './components/pages/ProjectsGalleryPage';
import { MemberDirectoryPage } from './components/pages/MemberDirectoryPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPortalPage } from './components/pages/AdminPortalPage';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const AppContent: React.FC = () => {
  const { currentPage, toast } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'leadership':
        return <LeadershipPage />;
      case 'membership':
        return <MembershipPage />;
      case 'programmes':
        return <ProgrammesEventsPage />;
      case 'projects':
        return <ProjectsGalleryPage />;
      case 'directory':
        return <MemberDirectoryPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPortalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Modals */}
      <LeaderModal />
      <GalleryModal />

      {/* Global Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-6 z-50 max-w-sm rounded-xl p-4 shadow-xl border flex items-start gap-3 animate-slideUp bg-slate-900 text-xs text-white border-slate-800">
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
          <div className="flex-1 leading-relaxed">{toast.message}</div>
        </div>
      )}
    </div>
  );
};
