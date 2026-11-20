export type PageId = 
  | 'home' 
  | 'about' 
  | 'leadership' 
  | 'membership' 
  | 'programmes' 
  | 'projects' 
  | 'directory' 
  | 'contact' 
  | 'admin';

export type CreativeDiscipline = 
  | 'Actor / Actress'
  | 'Film Director'
  | 'Film Producer'
  | 'Screenwriter / Playwright'
  | 'Cinematographer / DoP'
  | 'Film Editor'
  | 'Sound Designer / Music'
  | 'Costume & Makeup'
  | 'Production Crew / Manager'
  | 'Voice-Over / Model'
  | 'Media & Communications';

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'board' | 'chapter';
  image: string;
  tagline: string;
  bio: string[];
  imdbUrl?: string;
  email?: string;
  socials?: {
    instagram?: string;
    facebook?: string;
  };
  credits?: string[];
  awards?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time?: string;
  venue: string;
  isUpcoming: boolean;
  category: 'Annual Seminar' | 'Workshop & Masterclass' | 'Film Screening' | 'Merit Awards';
  description: string;
  highlights?: string[];
  registrationUrl?: string; // empty string means no registration link exists yet
  image?: string;
  speakerOrHost?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: 'Feature Film' | 'Short Film' | 'Theatre Production' | 'Advocacy Campaign';
  year: string;
  status: 'Released' | 'In Production' | 'Screened';
  description: string;
  directorOrLead?: string;
  accolades?: string[];
  image?: string;
  platform?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  category: 'Annual Seminar' | 'Merit Awards' | 'Leadership' | 'Production';
  image: string;
  eventDate: string;
  location: string;
  credits?: string;
}

export interface MemberProfile {
  id: string;
  name: string;
  discipline: CreativeDiscipline;
  city: string;
  bio: string;
  image?: string;
  credits: string[];
  directoryOptIn: boolean;
  joinedYear: string;
  verified: boolean;
  emailContact?: string;
}

export interface MembershipApplication {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  discipline: CreativeDiscipline;
  experienceYears: string;
  stateOfResidence: string;
  portfolioUrl?: string;
  imdbUrl?: string;
  statementOfPurpose: string;
  directoryOptIn: boolean;
  agreeToRules: boolean;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected' | 'under_review';
  reviewerNotes?: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
}
