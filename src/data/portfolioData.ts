import {
  SkillItem,
  FocusArea,
  ProjectFeature,
  CoreStrength,
  UxPrinciple,
  ProcessStep,
  LanguageItem,
  EducationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Fowser Fathima Simha',
  shortName: 'Fathima Simha',
  brandName: 'SIMHA.',
  titles: ['HND IT Student', 'Full Stack Developer', 'UX Designer'],
  primaryBadge: 'Full Stack Developer • UX Designer',
  tagline: 'I build thoughtful, responsive and user-friendly digital experiences.',
  bio: 'Motivated and detail-oriented HND IT student seeking opportunities in Full Stack Development and UX Design. Passionate about building responsive, intuitive and user-friendly web applications using modern technologies, while continuously developing technical and design skills.',
  location: 'Muthur, Trincomalee, Sri Lanka',
  phone: '+94 75 982 2369',
  email: 'fathimasimha2002@gmail.com',
  github: 'https://github.com/simha2002',
  githubHandle: 'github.com/simha2002',
  status: 'Open to Opportunities',
};

export const HERO_STATS = [
  {
    value: 'HND IT',
    label: 'Student',
    subtext: 'ATI Trincomalee (SLIATE)',
  },
  {
    value: 'Full Stack',
    label: 'Development',
    subtext: 'Modern Web Architectures',
  },
  {
    value: 'UX',
    label: 'Design',
    subtext: 'Intuitive User Interfaces',
  },
  {
    value: '1',
    label: 'Major Academic Project',
    subtext: 'AI-Assisted Platform',
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Full Stack Development',
    description: 'Developing end-to-end web applications combining robust backend services with polished, modern frontends.',
    icon: 'Layers',
  },
  {
    title: 'UX Design',
    description: 'Crafting intuitive user journeys, wireframes, and design structures with clarity, empathy, and aesthetic balance.',
    icon: 'Sparkles',
  },
  {
    title: 'Responsive Web Design',
    description: 'Ensuring seamless responsiveness and visual hierarchy across all mobile, tablet, and desktop viewports.',
    icon: 'Smartphone',
  },
  {
    title: 'Database Development',
    description: 'Designing structured relational database schemas, tables, relationships, and queries using MySQL.',
    icon: 'Database',
  },
  {
    title: 'API Integration',
    description: 'Integrating external REST APIs and AI services to add smart, automated capabilities to web applications.',
    icon: 'Network',
  },
  {
    title: 'Problem Solving',
    description: 'Systematically debugging code, optimizing performance bottlenecks, and solving algorithmic challenges.',
    icon: 'CheckCircle2',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: 'Code', description: 'Semantic markup, accessible structure' },
  { name: 'CSS3', category: 'Frontend', icon: 'Palette', description: 'Flexbox, Grid, animations, styling' },
  { name: 'JavaScript ES6', category: 'Frontend', icon: 'FileCode2', description: 'Async/await, DOM, modern ES6+' },
  { name: 'React.js', category: 'Frontend', icon: 'Atom', description: 'Component state, hooks, UI architecture' },
  { name: 'Bootstrap', category: 'Frontend', icon: 'LayoutGrid', description: 'Responsive grids, UI components' },
  
  // Backend
  { name: 'PHP', category: 'Backend', icon: 'Server', description: 'Server-side scripting & OOP' },
  { name: 'Laravel', category: 'Backend', icon: 'Flame', description: 'MVC architecture, routing, Eloquent ORM' },
  { name: 'Java', category: 'Backend', icon: 'Coffee', description: 'Object-oriented programming & algorithms' },
  { name: 'Python', category: 'Backend', icon: 'Terminal', description: 'Scripting, backend logic & data handling' },
  { name: 'Node.js', category: 'Backend', icon: 'Cpu', description: 'JavaScript runtime & event-driven backend' },
  
  // Database
  { name: 'MySQL', category: 'Database', icon: 'Database', description: 'Relational schema design, SQL queries & indexing' },
  
  // Tools
  { name: 'Git', category: 'Tools', icon: 'GitBranch', description: 'Version control & branch management' },
  { name: 'GitHub', category: 'Tools', icon: 'Github', description: 'Repository hosting, collaboration & CI' },
  { name: 'Visual Studio Code', category: 'Tools', icon: 'Code2', description: 'Primary development IDE & debugging' },
  { name: 'XAMPP', category: 'Tools', icon: 'Laptop', description: 'Local Apache, MySQL & PHP server environment' },
];

export const MARQUEE_ITEMS = [
  { name: 'HTML5', icon: 'Code' },
  { name: 'CSS3', icon: 'Palette' },
  { name: 'JavaScript', icon: 'FileCode2' },
  { name: 'React.js', icon: 'Atom' },
  { name: 'PHP', icon: 'Server' },
  { name: 'Laravel', icon: 'Flame' },
  { name: 'Java', icon: 'Coffee' },
  { name: 'Python', icon: 'Terminal' },
  { name: 'Node.js', icon: 'Cpu' },
  { name: 'MySQL', icon: 'Database' },
  { name: 'Bootstrap', icon: 'LayoutGrid' },
  { name: 'OpenAI API', icon: 'Sparkles' },
  { name: 'Git', icon: 'GitBranch' },
  { name: 'GitHub', icon: 'Github' },
  { name: 'VS Code', icon: 'Code2' },
  { name: 'XAMPP', icon: 'Laptop' },
];

export const FEATURED_PROJECT = {
  title: 'Book Exchange Platform with AI-Assisted Book Description',
  shortTitle: 'Book Exchange Platform',
  badge: 'Featured Academic Project',
  summary: 'The Book Exchange Platform is a web-based application developed to help users exchange books in a secure, simple and cost-effective way.',
  detailedDescription:
    'Developed as a full stack solution to eliminate friction in student and reader book sharing. Integrates automated OpenAI API book synopsis generation, real-time OTP authentication, a bidirectional peer-to-peer exchange request pipeline, in-app messaging, physical meeting coordinator, and an administrative control suite.',
  technologies: [
    'HTML',
    'CSS',
    'Bootstrap',
    'Laravel',
    'PHP',
    'MySQL',
    'OpenAI API',
  ],
  features: [
    {
      title: 'User Registration & Secure Login',
      description: 'Encrypted authentication flow safeguarding user credentials and personal profile records.',
      icon: 'ShieldCheck',
    },
    {
      title: 'OTP Email Verification',
      description: 'One-Time Password email verification system ensuring valid and authentic student/user registrations.',
      icon: 'KeyRound',
    },
    {
      title: 'Browse & Search Books',
      description: 'Dynamic search, category filters, author indexing, and condition indicators for rapid discovery.',
      icon: 'Search',
    },
    {
      title: 'Book Upload & Cataloging',
      description: 'Streamlined form for uploading cover photos, book details, genre, and edition status.',
      icon: 'UploadCloud',
    },
    {
      title: 'AI Book Description Generator',
      description: 'OpenAI API powered summarizer creating engaging, high-fidelity book synopses automatically.',
      icon: 'Sparkles',
    },
    {
      title: 'Book Exchange Request System',
      description: 'Bidirectional exchange workflow with accept, negotiate, pending, and completed status tracking.',
      icon: 'ArrowLeftRight',
    },
    {
      title: 'Private Chat Between Users',
      description: 'Secure in-app direct messaging enabling peer-to-peer communication between book owners.',
      icon: 'MessageSquare',
    },
    {
      title: 'Meeting Place, Date & Time Scheduling',
      description: 'Integrated coordination tool to arrange safe physical exchange locations, dates, and times.',
      icon: 'CalendarClock',
    },
    {
      title: 'Book & User Ratings and Reviews',
      description: 'Community trust mechanism with 5-star rating feedback and verified exchange commentary.',
      icon: 'Star',
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive administrative oversight monitoring user activities, reported listings, and logs.',
      icon: 'LayoutDashboard',
    },
    {
      title: 'Secure Database Management',
      description: 'Optimized relational schema in MySQL enforcing referential integrity and sanitized queries.',
      icon: 'Database',
    },
    {
      title: 'Responsive User Interface',
      description: 'Mobile-first layout providing a fluid, consistent user experience across phones, tablets, and desktops.',
      icon: 'Smartphone',
    },
  ],
};

export const CORE_STRENGTHS: CoreStrength[] = [
  {
    title: 'Full Stack Development',
    description: 'Capable of bridging frontend UI components with backend business logic, database transactions, and route handlers.',
    tag: 'Engineering',
  },
  {
    title: 'Responsive Web Design',
    description: 'Deep dedication to building pixel-perfect, accessible, and highly usable layouts across diverse device form factors.',
    tag: 'Frontend',
  },
  {
    title: 'REST API Integration',
    description: 'Skillful handling of HTTP requests, JSON payloads, async communications, and third-party AI service integrations.',
    tag: 'Integration',
  },
  {
    title: 'Database Design & Management',
    description: 'Structuring normalized relational tables, foreign key constraints, indexing, and efficient SQL queries.',
    tag: 'Data',
  },
  {
    title: 'Problem Solving & Debugging',
    description: 'Methodical approach to root-cause analysis, code refactoring, testing edge cases, and continuous optimization.',
    tag: 'Execution',
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Higher National Diploma in Information Technology',
  shortName: 'HND IT',
  institution: 'Advanced Technology Institute (ATI), Trincomalee',
  parentOrg: 'SLIATE (Sri Lanka Institute of Advanced Technological Education)',
  expectedYear: 'Expected Graduation: 2028',
  location: 'Trincomalee, Sri Lanka',
  description:
    'Comprehensive curriculum encompassing Full Stack Web Development, Object-Oriented Programming (Java, PHP, Python), Database Management Systems (MySQL), Software Engineering Principles, and Network Architecture.',
  highlights: [
    'Specializing in Full Stack Software Development and Interactive Systems',
    'Practical hands-on coursework in Laravel MVC, Database Architecture & API development',
    'Active participation in academic software engineering projects',
  ],
};

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    name: 'Tamil',
    proficiency: 'Native',
    notes: 'Primary language with native fluency in speaking, reading, and writing.',
  },
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
    notes: 'Proficient technical and professional communication in academic and collaborative environments.',
  },
];

export const SOFT_SKILLS_DATA = [
  { name: 'Teamwork & Collaboration', icon: 'Users' },
  { name: 'Strong Communication', icon: 'MessageCircle' },
  { name: 'Time Management', icon: 'Clock' },
  { name: 'Adaptability', icon: 'RefreshCw' },
  { name: 'Self-Motivation', icon: 'Compass' },
];

export const UX_PRINCIPLES: UxPrinciple[] = [
  {
    title: 'Simple',
    subtitle: 'Clarity First',
    description: 'Make interfaces easy to understand. Eliminate unnecessary cognitive load and focus on what matters to the user.',
    icon: 'Smile',
  },
  {
    title: 'Responsive',
    subtitle: 'Adaptive Harmony',
    description: 'Create experiences that work across devices. Seamless touch ergonomics on mobile, rich precision on desktop.',
    icon: 'Maximize2',
  },
  {
    title: 'User-Centered',
    subtitle: 'Empathy-Driven',
    description: 'Design with user needs and usability in mind. Structure workflows around natural human habits and feedback loops.',
    icon: 'HeartHandshake',
  },
];

export const DESIGN_PROCESS: ProcessStep[] = [
  {
    step: '01',
    name: 'Understand',
    description: 'Identify user pain points, define project constraints, and clarify the core functional purpose.',
    icon: 'Search',
  },
  {
    step: '02',
    name: 'Design',
    description: 'Structure information architecture, map user journeys, wireframe layouts, and establish visual hierarchy.',
    icon: 'PenTool',
  },
  {
    step: '03',
    name: 'Develop',
    description: 'Translate designs into clean, modular code with responsive styling and robust backend connections.',
    icon: 'Code',
  },
  {
    step: '04',
    name: 'Test',
    description: 'Validate responsive behavior, verify API and database interactions, and troubleshoot edge cases.',
    icon: 'ShieldCheck',
  },
  {
    step: '05',
    name: 'Improve',
    description: 'Iterate based on usability feedback, optimize performance, and refine interaction polish.',
    icon: 'TrendingUp',
  },
];
