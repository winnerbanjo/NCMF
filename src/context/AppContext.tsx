import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId, LeaderProfile, EventItem, ProjectItem, GalleryPhoto, MemberProfile, MembershipApplication } from '../types';
import { INITIAL_LEADERS, INITIAL_EVENTS, INITIAL_PROJECTS, INITIAL_GALLERY, INITIAL_MEMBERS, INITIAL_APPLICATIONS } from '../data/initialData';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  leaders: LeaderProfile[];
  selectedLeader: LeaderProfile | null;
  setSelectedLeader: (leader: LeaderProfile | null) => void;
  events: EventItem[];
  addEvent: (event: Omit<EventItem, 'id'>) => void;
  projects: ProjectItem[];
  gallery: GalleryPhoto[];
  selectedPhoto: GalleryPhoto | null;
  setSelectedPhoto: (photo: GalleryPhoto | null) => void;
  members: MemberProfile[];
  applications: MembershipApplication[];
  submitApplication: (appData: {
    fullName: string;
    email: string;
    phone: string;
    discipline: MembershipApplication['discipline'];
    experienceYears: string;
    stateOfResidence: string;
    portfolioUrl?: string;
    imdbUrl?: string;
    statementOfPurpose: string;
    directoryOptIn: boolean;
    agreeToRules: boolean;
  }) => { success: boolean; message: string; referenceNumber?: string };
  updateApplicationStatus: (
    id: string, 
    status: MembershipApplication['status'], 
    reviewerNotes?: string, 
    reviewedBy?: string
  ) => void;
  isWhatsAppOpen: boolean;
  setIsWhatsAppOpen: (open: boolean) => void;
  toast: ToastState | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  APPLICATIONS: 'ncmf_membership_applications_v1',
  EVENTS: 'ncmf_events_v1',
  MEMBERS: 'ncmf_directory_members_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  // Initial state with localStorage backup
  const [leaders] = useState<LeaderProfile[]>(INITIAL_LEADERS);
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [gallery] = useState<GalleryPhoto[]>(INITIAL_GALLERY);

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.EVENTS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_EVENTS;
  });

  const [members, setMembers] = useState<MemberProfile[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MEMBERS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_MEMBERS;
  });

  const [applications, setApplications] = useState<MembershipApplication[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_APPLICATIONS;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MEMBERS, JSON.stringify(members));
  }, [members]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now().toString();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast(prev => (prev?.id === id ? null : prev));
    }, 4500);
  };

  // Submit Application with duplicate prevention and idempotency
  const submitApplication = (appData: {
    fullName: string;
    email: string;
    phone: string;
    discipline: MembershipApplication['discipline'];
    experienceYears: string;
    stateOfResidence: string;
    portfolioUrl?: string;
    imdbUrl?: string;
    statementOfPurpose: string;
    directoryOptIn: boolean;
    agreeToRules: boolean;
  }) => {
    const cleanEmail = appData.email.trim().toLowerCase();
    const cleanPhone = appData.phone.trim().replace(/\s+/g, '');

    // Check duplicate pending or existing application
    const existing = applications.find(
      a => a.email.toLowerCase() === cleanEmail || a.phone.replace(/\s+/g, '') === cleanPhone
    );

    if (existing) {
      return {
        success: false,
        message: `An application with email (${cleanEmail}) or phone (${cleanPhone}) was already submitted on ${existing.submittedAt}. Reference: ${existing.referenceNumber}. Current status: ${existing.status.toUpperCase()}.`,
        referenceNumber: existing.referenceNumber
      };
    }

    // Generate unique reference number like NCMF-2026-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const refNum = `NCMF-2026-${randomDigits}`;
    const newApp: MembershipApplication = {
      id: `app-${Date.now()}`,
      referenceNumber: refNum,
      ...appData,
      email: cleanEmail,
      submittedAt: new Date().toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WAT',
      status: 'pending'
    };

    setApplications(prev => [newApp, ...prev]);
    showToast(`Application submitted successfully! Reference: ${refNum}`, 'success');

    return {
      success: true,
      message: 'Your application has been received and queued for review by the NCMF Secretariat.',
      referenceNumber: refNum
    };
  };

  // Update application status & optionally sync to Member Directory
  const updateApplicationStatus = (
    id: string, 
    status: MembershipApplication['status'], 
    reviewerNotes?: string, 
    reviewedBy?: string
  ) => {
    let targetApp: MembershipApplication | undefined;

    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        targetApp = {
          ...app,
          status,
          reviewerNotes: reviewerNotes || app.reviewerNotes,
          reviewedBy: reviewedBy || 'NCMF Secretariat Reviewer',
          reviewedAt: new Date().toLocaleString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }) + ' WAT'
        };
        return targetApp;
      }
      return app;
    }));

    // If approved and applicant opted into directory, auto-enroll into directory
    if (status === 'approved' && targetApp && targetApp.directoryOptIn) {
      const alreadyInDirectory = members.some(m => m.name.toLowerCase() === targetApp!.fullName.toLowerCase());
      if (!alreadyInDirectory) {
        const newMember: MemberProfile = {
          id: `mem-${Date.now()}`,
          name: targetApp.fullName,
          discipline: targetApp.discipline,
          city: targetApp.stateOfResidence,
          bio: targetApp.statementOfPurpose || `${targetApp.discipline} with ${targetApp.experienceYears} of industry experience.`,
          credits: targetApp.portfolioUrl ? [targetApp.portfolioUrl] : ['NCMF Professional Member'],
          directoryOptIn: true,
          joinedYear: '2026',
          verified: true,
          emailContact: targetApp.email
        };
        setMembers(prev => [newMember, ...prev]);
        showToast(`${targetApp.fullName} approved and enrolled into the Public Member Directory!`, 'success');
      } else {
        showToast(`Application approved for ${targetApp.fullName}!`, 'success');
      }
    } else {
      showToast(`Application status updated to ${status.toUpperCase()}.`, 'info');
    }
  };

  const addEvent = (eventData: Omit<EventItem, 'id'>) => {
    const newEvent: EventItem = {
      id: `event-${Date.now()}`,
      ...eventData
    };
    setEvents(prev => [newEvent, ...prev]);
    showToast('New event published successfully to public schedule!', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        leaders,
        selectedLeader,
        setSelectedLeader,
        events,
        addEvent,
        projects,
        gallery,
        selectedPhoto,
        setSelectedPhoto,
        members,
        applications,
        submitApplication,
        updateApplicationStatus,
        isWhatsAppOpen,
        setIsWhatsAppOpen,
        toast,
        showToast,
        isAdmin,
        setIsAdmin
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
