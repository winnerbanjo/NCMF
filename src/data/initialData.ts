import { LeaderProfile, EventItem, ProjectItem, GalleryPhoto, MemberProfile, MembershipApplication } from '../types';

export const INITIAL_LEADERS: LeaderProfile[] = [
  {
    id: 'ijeoma-richards',
    name: 'Ijeoma Richards',
    role: 'Co-Founder & National President',
    category: 'executive',
    image: '/images/leadership/ijeoma-richards.jpg',
    tagline: 'Award-Winning Actor, Producer, Filmmaker & CEO, TRIMM Network',
    bio: [
      'Ijeoma Richards is an award-winning actor, film producer, and creative executive. She holds an MBA from the University of Lagos, combining artistic excellence with strong business and leadership acumen. She studied film directing with Kinabuti in 2014 and film production at Del-York Creative Academy.',
      'With verified IMDb credits, she has appeared in over 100 films and television series, including Living in Oblivion, Rave, Husbands of Lagos, Aunty Maria, Make Me a Girl Again, Newman Street, and Salome. Known for her versatility and depth, she moves effortlessly between English, Igbo, and Yoruba productions, as well as drama, comedy, and character roles.',
      'She is the CEO of TRIMM Network, a media, event consultancy, and celebrity management firm through which she produces original work. Her production credits include the popular online series #AdukeSeries (Adukefoodspot), the critically acclaimed documentary Uru Igba-Boi on the Igbo apprenticeship system, and feature films such as Grandma’s Neighbours, The Deputy, and Comfort My Love.',
      'As Co-Founder and President of the Nollywood Creative Minds Forum (NCMF), in 2024 she received a Surprise Leadership Excellence Award from members for her outstanding stewardship. Under her leadership, NCMF has won multiple industry awards and produced acclaimed projects including the DStv hit feature film Perfect for Divorce.',
      'She is the founder of the biennial Film Industry Legacy Award. Her work across the screen and boardroom has earned her the Actors Guild of Nigeria (AGN) Merit Award (2017), Best Supporting Actress at the Nigeria Women Achievers Awards, and Entertainment Personality of the Year at the 2022 Nigeria Women Achievers Awards.'
    ],
    imdbUrl: 'https://www.imdb.com',
    email: 'ijemrichards@gmail.com',
    socials: {
      instagram: 'https://instagram.com/ijeomarichards1',
      facebook: 'https://www.facebook.com/share/1KByzDcusy/'
    },
    credits: ['100+ Screen Appearances (IMDb Verified)', 'Living in Oblivion', 'Perfect for Divorce (DStv Hit)', 'Husbands of Lagos', 'Rave', 'Aunty Maria', '#AdukeSeries', 'Uru Igba-Boi'],
    awards: [
      'Over 100 Film & Television Screen Appearances',
      'Actors Guild of Nigeria (AGN) Merit Award (2017)',
      'Best Supporting Actress — Nigeria Women Achievers Awards',
      'Entertainment Personality of the Year (2022)',
      'NCMF Surprise Leadership Excellence Award (2024)'
    ]
  },
  {
    id: 'tolulope-odebunmi',
    name: 'Tolulope Odebunmi',
    role: 'Head of Media',
    category: 'executive',
    image: '/images/leadership/tolulope-odebunmi.jpg',
    tagline: 'Filmmaker, Director, Writer, Producer, Actor & Founder, JISYEM’S View Productions',
    bio: [
      'Tolulope Odebunmi is a Nigerian filmmaker, screen and stage actor, writer, director, producer, and creative entrepreneur passionate about using storytelling as a catalyst for entertainment, inspiration, and social change. Known as a "One-Stop Filmmaker", he embodies creative versatility and visionary execution.',
      'He is the Founder and Creative Lead of JISYEM’S VIEW PRODUCTIONS, an independent creative production company committed to developing and producing authentic African stories with universal appeal. Through the company, he explores the intersection of film, television, theatre, creative technology, and brand storytelling.',
      'His professional development includes participation in the prestigious British Council FilmLab Africa, a competitive filmmaking programme where he worked with celebrated mentors including Abbesi Akhamie and Oladipo O. Fresh to hone advanced screenwriting and directing methodologies.',
      'Tolulope serves as the Head of Media at NCMF, where he brings his creative communication, executive production experience, and media leadership to position the forum on the global stage.',
      'His acclaimed short film Bottled Up won Best Short Film at the Kaduna International Film Festival and earned recognition at An Evening of Short Film Festival and the Bayelsa International Film Festival. His original stage drama "Mentality: What Men Don’t Say" was selected for the Lagos Fringe Festival.'
    ],
    credits: ['Bottled Up (Director & Producer)', 'King of Boys 2 (Taofik)', 'Africa Magic Brethren (Lagos Shepherd)', 'The Origin: Madam Koikoi (Ige)', 'Africa Magic Itura (Ijakumo)', 'Mentality: What Men Don’t Say'],
    awards: [
      'Best Short Film — Kaduna International Film Festival (Bottled Up)',
      'Lagos Fringe Festival Official Selection (Mentality: What Men Don’t Say)',
      'British Council FilmLab Africa Grantee & Fellow'
    ]
  },
  {
    id: 'bukky-thomas',
    name: 'Bukola “Bukky” Thomas',
    role: 'Vice President',
    category: 'executive',
    image: '/images/leadership/bukky-thomas.jpg',
    tagline: 'Nollywood Actor, Model, Voice-Over Artist & Marketing Executive',
    bio: [
      'Bukola Thomas is a prominent Nollywood actor, commercial model, voice-over artist, and entrepreneur whose career reflects a blend of beauty, intellect, and versatility. Born to a Sierra Leonean mother and a father from Lagos Island, she proudly identifies as a Lagos indigene.',
      'She holds a Bachelor’s degree in Religion from Lagos State University, as well as an MBA in Marketing—academic achievements that complement her eloquence, sharp diction, and strong interpersonal and administrative skills.',
      'Before embracing acting full-time, Bukola built an impressive corporate career in marketing with Scoa Nigeria Plc and Three Fold Nigeria Ltd. In 2013, she made a successful transition into Nollywood, where her distinctive carriage, authenticity, and emotional depth quickly distinguished her.',
      'As Vice President of NCMF, she plays a vital role in member relations, corporate partnerships, and elevating the welfare and dignity of screen practitioners across the Nigerian entertainment ecosystem.'
    ],
    credits: ['Nollywood Feature Productions', 'Commercial Voice-Over Campaigns', 'High-Fashion & Commercial Modelling', 'Corporate Brand Campaigns']
  },
  {
    id: 'stella-maris-nnaji',
    name: 'Stella-Maris Nnaji',
    role: 'Secretary',
    category: 'executive',
    image: '/images/leadership/stella-maris-nnaji.jpg',
    tagline: 'Actor, Producer, Stage Director, Model & Former 8-Year Secretary, AGN Lagos',
    bio: [
      'Stella-Maris Nnaji is a seasoned Nigerian actor, film producer, stage director, commercial model, voice-over artist, and creative administrator with over 15 years of illustrious experience across stage, television, and Nigerian cinema. Standing at 6 feet tall with a commanding screen presence, she is recognized as a formidable creative force in Nollywood.',
      'A trained Computer Programmer, Stella-Maris began her professional career in the technology and corporate sector with Comprotronics, Digitrust Nigeria Limited, and Aeromaritime Nigeria Limited (Brawal Group), where she rose to Assistant Computer Manager before courageously transitioning full-time into her true passion for the arts.',
      'Her administrative track record in the Nigerian film industry is unmatched. She served for eight consecutive years as Secretary of the Actors Guild of Nigeria (AGN) Lagos State Chapter, served as Secretary of AGNEC, serves on various committees of the Nigeria Association of Theatre Arts Practitioners (NANTAP), is currently Treasurer of AMPRAC, and proudly serves as National Secretary of NCMF.',
      'Her extensive screen credits include Last Flight to Abuja, Eliminators, Grandma’s Neighbour, The Deputy, Family Jury, Date with Destiny, and hit TV series such as Tinsel, Emerald, Flashpoint, and The New Village Headmaster.'
    ],
    credits: ['Last Flight to Abuja', 'Tinsel', 'The New Village Headmaster', 'Grandma’s Neighbour', 'The Deputy', 'Emerald', 'Brother Jero (Theatre)', 'Five Maidens of Fadaka'],
    awards: [
      'Actors Guild of Nigeria (AGN) Long Service & Excellence Citation',
      'NANTAP Stage Direction Recognition',
      '8 Years Exemplary Secretarial Service Award'
    ]
  },
  {
    id: 'kayode-freeman',
    name: 'Kayode Freeman',
    role: 'Vice President',
    category: 'executive',
    image: '',
    tagline: 'Veteran Actor, Producer & Creative Industry Administrator',
    bio: [
      'Kayode Freeman is an established film practitioner and veteran Nollywood producer whose career spans decades of dedicated service to Nigerian motion pictures.',
      'As Vice President of NCMF, he oversees executive strategic initiatives, industry institutional partnerships, and senior creative stakeholder engagements across Nigeria.'
    ]
  },
  {
    id: 'emeka-okoye',
    name: 'Emeka Okoye',
    role: 'National Coordinator',
    category: 'executive',
    image: '',
    tagline: 'Acclaimed Nollywood Actor, Comic Icon & Guild Mobilizer',
    bio: [
      'Emeka Okoye is a beloved Nollywood actor and screen personality widely known for his versatility, comic brilliance, and grassroots mobilization within the creative community.',
      'As National Coordinator, he coordinates member mobilization, logistical operations for national forums, and chapter alignment across the federation.'
    ]
  },
  {
    id: 'vivian-nicolas',
    name: 'Vivian Nicolas',
    role: 'Treasurer',
    category: 'executive',
    image: '',
    tagline: 'Finance Strategist, Producer & NCMF Treasurer',
    bio: [
      'Vivian Nicolas oversees the fiscal governance, financial accountability, and budgetary planning of the Nollywood Creative Minds Forum.',
      'She ensures strict adherence to transparency, ethical fund management, and resource stewardship for member welfare programmes.'
    ]
  },
  {
    id: 'lilian-chille',
    name: 'Lilian Chille',
    role: 'Welfare Officer',
    category: 'executive',
    image: '',
    tagline: 'Advocate for Member Wellness, Film Set Safety & Health Insurance',
    bio: [
      'Lilian Chille champions the vital welfare pillar of NCMF, coordinating benevolent funds, emergency healthcare assistance, member hospital visits, and set safety initiatives.',
      'Her work ensures that film practitioners receive empathetic care, mutual support, and solidarity in times of celebration and challenge.'
    ]
  },
  {
    id: 'morgan-nwamba',
    name: 'Morgan Nwamba',
    role: 'Vice Coordinator',
    category: 'executive',
    image: '',
    tagline: 'Logistics Lead & Operational Coordinator',
    bio: [
      'Morgan Nwamba works closely with the National Coordinator to execute NCMF seminars, festival appearances, short-film collaborative shoots, and annual awards banquets.'
    ]
  },
  {
    id: 'kolade-owolabi',
    name: 'Kolade Owolabi',
    role: 'Kwara State Chapter Coordinator',
    category: 'chapter',
    image: '',
    tagline: 'Regional Filmmaker & Kwara State Leadership Lead',
    bio: [
      'Kolade Owolabi spearheads NCMF’s regional expansion in Kwara State and North-Central Nigeria, connecting provincial filmmakers to national productions, training, and distribution pipelines.'
    ]
  },
  {
    id: 'keppy-ekpenyong-bassey',
    name: 'Keppy Ekpenyong Bassey',
    role: 'Industry Adviser',
    category: 'board',
    image: '',
    tagline: 'Legendary Nollywood Pioneer, Actor, Producer & Industry Statesman',
    bio: [
      'Keppy Ekpenyong Bassey is an iconic titan of Nigerian cinema whose illustrious career stretches back to the golden dawn of Nollywood in the early 1990s. With hundreds of seminal film credits and television masterworks, he is revered for his patrician elegance and profound mentorship.',
      'As an Industry Adviser to NCMF, he provides invaluable strategic counsel on governance, industry ethics, regulatory diplomacy, and generational succession.'
    ]
  },
  {
    id: 'ngozi-nwosu',
    name: 'Ngozi Nwosu',
    role: 'Industry Adviser',
    category: 'board',
    image: '',
    tagline: 'Beloved Nollywood Matriarch, Veteran Screen Icon & Cultural Ambassador',
    bio: [
      'Ngozi Nwosu is one of the most celebrated and beloved veteran actors in the history of African television and cinema. Famous for timeless roles in Fuji House of Commotion, Living in Bondage, and countless Nollywood cinematic treasures, she has inspired generations of female performers.',
      'As an Industry Adviser to NCMF, she champions artistic discipline, mental wellness, actor dignity, and fair treatment of creative elders.'
    ]
  },
  {
    id: 'memuna-yahaya-abaje',
    name: 'Memuna Yahaya Abaje',
    role: 'Board Member & Stakeholder Adviser',
    category: 'board',
    image: '',
    tagline: 'Creative Strategist & Stakeholder Relations Adviser',
    bio: [
      'Memuna Yahaya Abaje serves on the advisory board of the Nollywood Creative Minds Forum, lending strategic oversight to institutional partnerships, inter-guild relationships, and regional inclusivity.'
    ]
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'event-ipob-2026',
    title: 'In Pursuit of Better: Next National Summit & Merit Awards',
    subtitle: 'Optimizing Potentials: Funding, Distribution & Global Standards in Nigerian Film',
    date: 'Date & Venue to be Announced',
    time: 'Full Day Programme',
    venue: 'Lagos, Nigeria (Venue to be confirmed)',
    isUpcoming: true,
    category: 'Annual Seminar',
    description: 'NCMF’s upcoming gathering bringing together filmmakers, producers, financiers, streaming executives, and guild leaders. Featuring keynote addresses, masterclass breakout sessions, collaborative pitching, and the Merit Awards ceremony.',
    highlights: [
      'Keynote: Navigating Global Streaming Algorithms & International Distribution',
      'Financing Roundtable: Bank of Industry & Private Equity for Nollywood',
      'Interactive Masterclasses on Cinematography, Sound & Script Packaging',
      'The NCMF Creative Merit Awards Ceremony'
    ],
    registrationUrl: '',
    speakerOrHost: 'Ijeoma Richards & Executive Committee',
    image: '/images/gallery/ncmf-merit-awards-gathering.jpg'
  },
  {
    id: 'event-masterclass-script',
    title: 'Masterclass: From Script to Screen — Cinematic Storytelling with Global Appeal',
    subtitle: 'British Council FilmLab Africa Insights & Character Psychology',
    date: 'January 23, 2027',
    time: '11:00 AM – 3:30 PM WAT',
    venue: 'NCMF Creative Secretariat, Okota, Lagos (Hybrid / Zoom Live)',
    isUpcoming: true,
    category: 'Workshop & Masterclass',
    description: 'An intensive, hands-on workshop led by NCMF Head of Media Tolulope Odebunmi and industry guest directors. Explores character-driven arcs, Final Draft workflows, low-budget high-yield cinematography, and pitch deck development.',
    highlights: [
      'Script breakdown with industry standard tools (Final Draft, Movie Magic)',
      'Character psychology and method performance direction',
      'Building international film festival circuits for African shorts'
    ],
    registrationUrl: '', // Registration link pending organiser confirmation
    speakerOrHost: 'Tolulope Odebunmi (Director, Bottled Up)',
    image: '/images/gallery/ncmf-awards-panel.jpg'
  },
  {
    id: 'event-awards-2024',
    title: 'In Pursuit of Better Seminar & 2024 Creative Merit Awards',
    subtitle: 'Celebrating 9 Years of Resilience, Ethical Craft, and Guild Welfare',
    date: 'November 2024',
    venue: 'Four Points by Sheraton, Victoria Island, Lagos',
    isUpcoming: false,
    category: 'Merit Awards',
    description: 'The monumental 2024 national gathering where NCMF presented prestigious merit awards to seasoned veterans, crew pioneers, and outstanding contributors. Included the presentation of the Surprise Leadership Excellence Award to National President Ijeoma Richards.',
    highlights: [
      'Merit Awards presented to film industry icons and craft innovators',
      'Surprise Leadership Excellence Award conferred upon President Ijeoma Richards',
      'Premiere screening of members’ collaborative short films',
      'Panel on actor health insurance and on-set medical safety standards'
    ],
    image: '/images/gallery/ncmf-presidential-presentation.jpg'
  },
  {
    id: 'event-short-lab-2023',
    title: 'NCMF Collaborative Short-Film Showcase & Networking Mixer',
    subtitle: 'Empowering New Voices Through Mentorship and Practical Set Experience',
    date: 'August 2023',
    venue: 'Lagos Creative Hub, Ikeja, Lagos',
    isUpcoming: false,
    category: 'Film Screening',
    description: 'Screening of four original short films produced collaboratively by NCMF members under the mentorship of veteran guild directors and producers.',
    highlights: [
      'Four member-directed short films screened to distribution scouts',
      'Q&A with directing mentors and cinematography crew',
      'Induction of 45 new professional members into the forum'
    ],
    image: '/images/gallery/ncmf-seminar-stage.jpg'
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'perfect-for-divorce',
    title: 'Perfect for Divorce',
    type: 'Feature Film',
    year: '2024 / 2025',
    status: 'Released',
    description: 'The acclaimed DStv hit feature film produced under the stewardship of NCMF National President Ijeoma Richards. An emotionally captivating marital drama exploring infidelity, forgiveness, and family legal reconciliation with top-tier Nollywood cast.',
    directorOrLead: 'Produced by Ijeoma Richards (TRIMM Network / NCMF Collaboration)',
    accolades: [
      'Broadcast Hit across DStv Africa Magic Channels',
      'Recognized for exceptional script integrity and realistic dialogue',
      'Featured prominent NCMF member actors and technical crew'
    ],
    platform: 'DStv / Africa Magic Showcase',
    image: '/images/gallery/ncmf-presidential-presentation.jpg'
  },
  {
    id: 'bottled-up',
    title: 'Bottled Up',
    type: 'Short Film',
    year: '2023',
    status: 'Released',
    description: 'A powerful, British Council FilmLab Africa-supported short film directed and produced by NCMF Head of Media Tolulope Odebunmi. The film explores the profound emotional weight of unexpressed grief, trauma, and societal expectations on young men.',
    directorOrLead: 'Directed & Produced by Tolulope Odebunmi (JISYEM’S VIEW PRODUCTIONS)',
    accolades: [
      'Best Short Film — Kaduna International Film Festival',
      'Nominated for Screening — Bayelsa International Film Festival',
      'Special Recognition — An Evening of Short Film Festival'
    ],
    platform: 'Film Festivals & British Council Screenings',
    image: '/images/gallery/ncmf-awards-panel.jpg'
  },
  {
    id: 'mentality-what-men-dont-say',
    title: 'Mentality: What Men Don’t Say',
    type: 'Theatre Production',
    year: '2023',
    status: 'Released',
    description: 'An original theatrical production written by Tolulope Odebunmi and presented by JISYEM’S VIEW PRODUCTIONS. Explores masculinity, emotional vulnerability, depression, and the difficult conversations men struggle to voice in contemporary society.',
    directorOrLead: 'Written by Tolulope Odebunmi',
    accolades: [
      'Official Selection — Lagos Fringe Festival',
      'Praised by theatre critics for courage, raw honesty, and psychological depth'
    ],
    platform: 'Stage & Fringe Festivals'
  },
  {
    id: 'collaborative-short-films',
    title: 'NCMF Collaborative Film Incubator',
    type: 'Short Film',
    year: 'Ongoing',
    status: 'In Production',
    description: 'A signature NCMF production initiative giving member screenwriters, actors, directors, cinematographers, and editors real opportunities to develop scripts, shoot on professional equipment, and build certified screen credits together.',
    directorOrLead: 'NCMF Production Committee & Member Teams',
    accolades: [
      'Over 12 short films produced since 2015',
      'Launched careers of emerging directors now working on mainstream television series'
    ],
    image: '/images/gallery/ncmf-seminar-stage.jpg'
  }
];

export const INITIAL_GALLERY: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: '2024 NCMF Merit Awards Gathering',
    caption: 'Executives, honorees, and guild members at the 2024 NCMF Merit Awards gathering, Four Points by Sheraton, Victoria Island, Lagos.',
    category: 'Merit Awards',
    image: '/images/gallery/ncmf-merit-awards-gathering.jpg',
    eventDate: 'November 2024',
    location: 'Four Points by Sheraton, Victoria Island, Lagos',
    credits: 'Photo: NCMF Media Unit'
  },
  {
    id: 'gal-2',
    title: 'Presentation to President Ijeoma Richards',
    caption: 'Presentation during the 2024 NCMF gathering at Four Points by Sheraton, Lagos.',
    category: 'Leadership',
    image: '/images/gallery/ncmf-presidential-presentation.jpg',
    eventDate: 'November 2024',
    location: 'Four Points by Sheraton, Lagos',
    credits: 'Photo: NCMF Media Unit'
  },
  {
    id: 'gal-3',
    title: 'Panel Discussion Session',
    caption: 'Speakers and film practitioners on stage during the NCMF seminar session in Lagos.',
    category: 'Annual Seminar',
    image: '/images/gallery/ncmf-awards-panel.jpg',
    eventDate: 'November 2024',
    location: 'Lagos, Nigeria',
    credits: 'Photo: NCMF Media Unit'
  },
  {
    id: 'gal-4',
    title: 'Seminar Presentation Stage',
    caption: 'The main stage during the NCMF seminar session in Lagos.',
    category: 'Annual Seminar',
    image: '/images/gallery/ncmf-seminar-stage.jpg',
    eventDate: 'November 2024',
    location: 'Lagos, Nigeria',
    credits: 'Photo: NCMF Media Unit'
  },
  {
    id: 'gal-5',
    title: 'Ijeoma Richards — National President',
    caption: 'Official leadership portrait of Ijeoma Richards, Co-Founder and National President of NCMF, CEO of TRIMM Network, and producer of Perfect for Divorce.',
    category: 'Leadership',
    image: '/images/leadership/ijeoma-richards.jpg',
    eventDate: '2026',
    location: 'Lagos, Nigeria',
    credits: 'TRIMM Network / NCMF'
  },
  {
    id: 'gal-6',
    title: 'Tolulope Odebunmi — Head of Media',
    caption: 'Official portrait of Tolulope Odebunmi, Head of Media at NCMF, Founder of JISYEM’S View Productions, and director of Bottled Up.',
    category: 'Leadership',
    image: '/images/leadership/tolulope-odebunmi.jpg',
    eventDate: '2026',
    location: 'Lagos, Nigeria',
    credits: 'JISYEM’S View Productions'
  },
  {
    id: 'gal-7',
    title: 'Bukola “Bukky” Thomas — Vice President',
    caption: 'Official portrait of Bukola Thomas, Vice President of NCMF, Nollywood actor, model, voice-over artist, and marketing executive.',
    category: 'Leadership',
    image: '/images/leadership/bukky-thomas.jpg',
    eventDate: '2026',
    location: 'Lagos, Nigeria',
    credits: 'NCMF Media'
  },
  {
    id: 'gal-8',
    title: 'Stella-Maris Nnaji — Secretary',
    caption: 'Official portrait of Stella-Maris Nnaji, Secretary of NCMF, veteran actor, producer, stage director, and former 8-year Secretary of AGN Lagos.',
    category: 'Leadership',
    image: '/images/leadership/stella-maris-nnaji.jpg',
    eventDate: '2026',
    location: 'Lagos, Nigeria',
    credits: 'NCMF Media'
  }
];

export const INITIAL_MEMBERS: MemberProfile[] = [
  {
    id: 'mem-1',
    name: 'Ijeoma Richards',
    discipline: 'Film Producer',
    city: 'Lagos',
    bio: 'Award-winning actor, producer, and CEO of TRIMM Network with over 100 screen appearances. DStv hit film Perfect for Divorce.',
    image: '/images/leadership/ijeoma-richards.jpg',
    credits: ['Living in Oblivion', 'Perfect for Divorce', 'Husbands of Lagos', 'Rave', '#AdukeSeries'],
    directoryOptIn: true,
    joinedYear: '2015',
    verified: true,
    emailContact: 'ijemrichards@gmail.com'
  },
  {
    id: 'mem-2',
    name: 'Tolulope Odebunmi',
    discipline: 'Film Director',
    city: 'Lagos',
    bio: 'Director, producer, and British Council FilmLab Africa fellow. Award-winning director of Bottled Up and King of Boys 2 actor.',
    image: '/images/leadership/tolulope-odebunmi.jpg',
    credits: ['Bottled Up', 'King of Boys 2', 'Africa Magic Itura', 'Madam Koikoi'],
    directoryOptIn: true,
    joinedYear: '2018',
    verified: true,
    emailContact: 'jisyemsviewproduction@gmail.com'
  },
  {
    id: 'mem-3',
    name: 'Bukola “Bukky” Thomas',
    discipline: 'Actor / Actress',
    city: 'Lagos',
    bio: 'Dynamic Nollywood actor, voice-over artist, and commercial model. Marketing MBA graduate with over a decade of screen mastery.',
    image: '/images/leadership/bukky-thomas.jpg',
    credits: ['Nollywood Feature Films', 'Major Commercial Adverts', 'Radio Drama Series'],
    directoryOptIn: true,
    joinedYear: '2016',
    verified: true
  },
  {
    id: 'mem-4',
    name: 'Stella-Maris Nnaji',
    discipline: 'Actor / Actress',
    city: 'Lagos',
    bio: '15+ years veteran of stage and screen. Former 8-year Secretary of AGN Lagos. Director of celebrated live theatre productions.',
    image: '/images/leadership/stella-maris-nnaji.jpg',
    credits: ['Last Flight to Abuja', 'Tinsel', 'The New Village Headmaster', 'Grandma’s Neighbour'],
    directoryOptIn: true,
    joinedYear: '2015',
    verified: true
  },
  {
    id: 'mem-5',
    name: 'Chukwuma Ezeani',
    discipline: 'Cinematographer / DoP',
    city: 'Lagos',
    bio: 'Specialist in dynamic lighting, anamorphic glass, and cinematic camera movement for contemporary African drama.',
    credits: ['Lagos Crime Pulse (Short)', 'Echoes of the Delta', 'A Night in Surulere'],
    directoryOptIn: true,
    joinedYear: '2021',
    verified: true
  },
  {
    id: 'mem-6',
    name: 'Folashade Adeleke',
    discipline: 'Screenwriter / Playwright',
    city: 'Ibadan',
    bio: 'Story architect and dialogue doctor specializing in bilingual (Yoruba/English) suspense thrillers and family sagas.',
    credits: ['The Missing Scepter (Stage)', 'Crossroads of Faith', 'Whispers in Eko'],
    directoryOptIn: true,
    joinedYear: '2020',
    verified: true
  },
  {
    id: 'mem-7',
    name: 'Osas Ighodaro-Martins',
    discipline: 'Film Editor',
    city: 'Benin City',
    bio: 'Post-production supervisor and colorist skilled in DaVinci Resolve and Adobe Premiere Pro for cinematic workflows.',
    credits: ['Bottled Up (Co-Editor)', 'Rhythms of Benin', 'City on Edge'],
    directoryOptIn: true,
    joinedYear: '2022',
    verified: true
  },
  {
    id: 'mem-8',
    name: 'Kolade Owolabi',
    discipline: 'Film Producer',
    city: 'Ilorin, Kwara State',
    bio: 'Kwara State chapter coordinator bridging regional film talents to mainstream distribution channels.',
    credits: ['Crown of Ilorin', 'The Weaver’s Song'],
    directoryOptIn: true,
    joinedYear: '2019',
    verified: true
  }
];

export const INITIAL_APPLICATIONS: MembershipApplication[] = [
  {
    id: 'app-seed-1',
    referenceNumber: 'NCMF-2026-8812',
    fullName: 'Kenneth Oghenekaro',
    email: 'k.oghene@cinemaminds.ng',
    phone: '08033221144',
    discipline: 'Cinematographer / DoP',
    experienceYears: '6 years',
    stateOfResidence: 'Lagos',
    portfolioUrl: 'https://vimeo.com/kenneth-dop',
    imdbUrl: '',
    statementOfPurpose: 'Seeking to collaborate with established NCMF directors, participate in the annual In Pursuit of Better seminar, and mentor upcoming camera operators in Lagos.',
    directoryOptIn: true,
    agreeToRules: true,
    submittedAt: '2026-11-18 14:22 WAT',
    status: 'pending'
  },
  {
    id: 'app-seed-2',
    referenceNumber: 'NCMF-2026-8819',
    fullName: 'Amina Bello Danjuma',
    email: 'amina.bello@creativefilms.com',
    phone: '08129988776',
    discipline: 'Screenwriter / Playwright',
    experienceYears: '4 years',
    stateOfResidence: 'Abuja (FCT)',
    portfolioUrl: 'https://writersguild.org/amina-bello',
    imdbUrl: '',
    statementOfPurpose: 'I have written two feature scripts currently optioned. I want to align with NCMF’s advocacy for writer royalties, professional development, and collaborative production initiatives.',
    directoryOptIn: true,
    agreeToRules: true,
    submittedAt: '2026-11-19 09:40 WAT',
    status: 'under_review',
    reviewerNotes: 'Scripts samples requested for portfolio review. High potential candidate.'
  },
  {
    id: 'app-seed-3',
    referenceNumber: 'NCMF-2026-7734',
    fullName: 'Oluwaseun Adeyemi',
    email: 'seun.adeyemi@nollywoodreel.ng',
    phone: '08055443322',
    discipline: 'Actor / Actress',
    experienceYears: '8 years',
    stateOfResidence: 'Lagos',
    portfolioUrl: 'https://instagram.com/seun.actor',
    imdbUrl: 'https://imdb.com/name/nm882910',
    statementOfPurpose: 'Active member of AGN Lagos looking to join NCMF for welfare support, health insurance access, and to participate in the upcoming feature film projects.',
    directoryOptIn: true,
    agreeToRules: true,
    submittedAt: '2026-11-15 16:15 WAT',
    status: 'approved',
    reviewedAt: '2026-11-16 11:30 WAT',
    reviewedBy: 'Stella-Maris Nnaji (Secretary)',
    reviewerNotes: 'Verified filmography with verified IMDb credits. Inducted into the directory.'
  }
];
