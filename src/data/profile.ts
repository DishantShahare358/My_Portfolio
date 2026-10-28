export const profile = {
  name: "Dishant Ganesh Shahare",
  shortName: "Dishant Shahare",
  initials: "DS",
  os: "DISHANT_OS v1.0",
  title: "Flutter Developer | AI/ML Engineer",
  subtitle: "Full-Stack AI Product Builder",
  tagline: "Building mobile, backend and applied AI systems that ship.",
  summary:
    "B.Tech graduate in Artificial Intelligence with hands-on experience in Flutter app development, Flask/Django backends, and applied AI/ML. Shipped apps live on the Play Store, with projects in RAG-based NLP and computer vision.",
  location: "Nagpur, Maharashtra, India",
  nationality: "Indian",
  dob: "12 February 2004",
  languages: ["English", "Hindi", "Marathi"],
  availability:
    "Open to Full-Time opportunities, internships, freelance work and exciting collaborations.",
  preferredLocation: "Nagpur / Remote / Pan India (open to relocation)",
  phone: "+91 9322564744",
  email: "dishantshahare9@gmail.com",
  linkedin: "https://www.linkedin.com/in/dishant-shahare-29409b262",
  github: "https://github.com/DishantShahare358",
  resume: "/Dishant_Shahare_Resume.pdf",
  roles: [
    "Flutter / Mobile Engineer",
    "AI/ML Engineer",
    "Full-Stack Developer",
    "GenAI / RAG Builder",
  ],
  status: "Open to Flutter, AI/ML, GenAI and Full-Stack roles",
  quote:
    "I believe in consistent learning, meaningful collaboration, and creating technology that makes a positive impact.",
  heroTags: [
    "Flutter Production Apps",
    "RAG Academic Assistants",
    "Computer Vision",
    "Play Store Releases",
  ],
  core: ["Flutter", "Python", "RAG", "FastAPI", "Firebase"],
  identityChips: [
    "FLUTTER",
    "AI/ML",
    "RAG",
    "NLP",
    "PYTHON",
    "FASTAPI",
    "FIREBASE",
    "SUPABASE",
  ],
} as const;

export const whyHire = [
  {
    title: "Shipped, not just prototyped",
    body: "Hyreso and Crop Bazar are live on the Play Store. Dishant has taken Flutter products through design, state management, backend integration and release.",
  },
  {
    title: "Applied AI across the stack",
    body: "Works from RAG chat pipelines and NLP to computer vision — face recognition, sign-language generation, gesture control and object detection.",
  },
  {
    title: "Mobile + backend ownership",
    body: "Comfortable owning Flutter clients, Flask/Django/FastAPI services, Firebase/Supabase, REST APIs and production debugging without hand-holding.",
  },
  {
    title: "Campus-to-product velocity",
    body: "Turns academic AI ideas into usable systems: CampusGPT for query solving and paper generation, plus agritech and career-tech products used by real users.",
  },
];

export const thinkingSteps = [
  {
    id: "01",
    title: "Problem",
    label: "Define the uncertainty",
    example: "CampusGPT",
    detail:
      "Students need accurate campus and academic answers, so the problem starts with retrieval boundaries instead of an unrestricted chatbot.",
  },
  {
    id: "02",
    title: "Data",
    label: "Shape the evidence",
    example: "University knowledge",
    detail:
      "Academic queries, question banks and campus records are prepared so the model answers from verified sources.",
  },
  {
    id: "03",
    title: "Intelligence",
    label: "Add model logic",
    example: "RAG + NLP",
    detail:
      "LangChain, embeddings and LLM calls turn retrieved context into grounded academic guidance.",
  },
  {
    id: "04",
    title: "System",
    label: "Ship the interface",
    example: "Flutter + FastAPI",
    detail:
      "A product interface on mobile/web with a FastAPI/Python backend so people can actually use the intelligence.",
  },
  {
    id: "05",
    title: "Result",
    label: "Make proof visible",
    example: "Play Store + GitHub",
    detail:
      "Live apps, public repositories and case studies are the reviewable proof layer — not just a skill list.",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "Dart", "JavaScript", "C", "C++", "Java", "SQL", "HTML", "CSS", "Bash"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Provider", "Riverpod", "GetX", "Bloc", "Android", "Firebase"],
  },
  {
    title: "AI / ML",
    items: [
      "TensorFlow",
      "OpenCV",
      "NLP",
      "RAG Pipelines",
      "LangChain",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Facial Recognition",
      "Hand Gesture Recognition",
    ],
  },
  {
    title: "Backend",
    items: ["Flask", "Django", "FastAPI", "Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Data & Storage",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "JSON", "Supabase", "Firebase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Render", "Figma", "VS Code", "Android Studio", "Docker", "Postman"],
  },
];

export const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Effective Communication",
  "Leadership & Initiative",
  "Continuous Learning",
];

export type Project = {
  slug: string;
  code: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  highlights: string[];
  stack: string[];
  live?: string;
  github?: string;
  role?: string[];
  challenges?: string[];
  learned?: string[];
  results?: string[];
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    slug: "hyreso",
    code: "01",
    name: "Hyreso",
    category: "AI Product / Careers",
    status: "Live on Play Store",
    summary:
      "AI-driven mock interview and resume optimization platform that improves job-readiness for students and job seekers.",
    problem:
      "Job seekers need interview practice and ATS-friendly resumes in one place, not scattered tools.",
    solution:
      "Ship a Flutter career product with AI mock interviews, resume builder, jobs, events and freelance/startup workflows.",
    architecture:
      "User -> Flutter app -> Firebase/Supabase auth & data -> AI APIs for interviews/resume suggestions -> Play Store release",
    highlights: [
      "AI-based chat and video mock interviews with feedback",
      "ATS-friendly resume builder with templates and export",
      "Jobs, events, bootcamps, freelance and startup registrations",
    ],
    stack: ["Flutter", "Dart", "Supabase", "Firebase", "AI APIs"],
    live: "https://play.google.com/store/apps/details?id=com.hyreso.app",
    screenshots: [
      "/projects/hyreso/01.png",
      "/projects/hyreso/02.png",
      "/projects/hyreso/03.png",
      "/projects/hyreso/04.jpg",
      "/projects/hyreso/05.jpg",
      "/projects/hyreso/06.png",
    ],
    role: [
      "Built and published production-ready Flutter flows",
      "Integrated backend services for real-time app functionality",
      "Strengthened UI/UX and state-management practices through release",
    ],
  },
  {
    slug: "crop-bazar",
    code: "02",
    name: "Crop Bazar",
    category: "Agritech Marketplace",
    status: "Live on Play Store",
    summary:
      "Agricultural marketplace connecting farmers with buyers through listings, price discovery and direct transactions.",
    problem:
      "Farmers and buyers lack a transparent digital marketplace for crop listing, pricing and secure trade.",
    solution:
      "A Flutter marketplace with multi-role users, real-time prices, crop listings, wallet-based orders and notifications.",
    architecture:
      "Farmer/Buyer -> Flutter client -> REST APIs -> listings, wallet & orders -> notifications",
    highlights: [
      "Roles for farmers, distributors, retailers and customers",
      "Real-time market prices and crop listings",
      "Secure in-app wallet and order flow",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Node.js", "MySQL", "Firebase"],
    live: "https://play.google.com/store/apps/details?id=com.thecropbazar.market",
    screenshots: [
      "/projects/crop-bazar/01.png",
      "/projects/crop-bazar/02.png",
      "/projects/crop-bazar/03.png",
      "/projects/crop-bazar/04.png",
      "/projects/crop-bazar/05.png",
      "/projects/crop-bazar/06.png",
      "/projects/crop-bazar/07.png",
    ],
  },
  {
    slug: "campusgpt",
    code: "03",
    name: "CampusGPT",
    category: "GenAI / RAG",
    status: "Public academic system",
    summary:
      "Smart AI academic assistant for automated question-paper generation, query solving and campus guidance using a RAG pipeline.",
    problem:
      "Students, faculty and visitors struggle to find accurate campus and academic answers across slow, inconsistent channels.",
    solution:
      "A single assistant that answers from university data with RAG, plus question-paper generation and academic guidance.",
    architecture:
      "User -> Query processing -> Embedding -> Vector search -> Retrieved campus/academic context -> LLM response",
    highlights: [
      "RAG-based chat grounded in university data",
      "Question paper generation and doubt solving",
      "Flutter / web interface with FastAPI and LangChain",
    ],
    stack: ["Python", "NLP", "RAG Pipeline", "LangChain", "FastAPI", "Flutter", "Firebase", "OpenAI"],
    github: "https://github.com/DishantShahare358",
    screenshots: [
      "/projects/campusgpt/01.png",
      "/projects/campusgpt/02.png",
      "/projects/campusgpt/03.png",
      "/projects/campusgpt/04.png",
      "/projects/campusgpt/05.png",
      "/projects/campusgpt/06.png",
      "/projects/campusgpt/07.png",
      "/projects/campusgpt/08.png",
      "/projects/campusgpt/09.png",
      "/projects/campusgpt/10.png",
    ],
    role: [
      "Designed and developed the user interface",
      "Integrated LLM APIs with FastAPI",
      "Worked on database design, data collection, testing and deployment",
    ],
    results: [
      "Helps 500+ students with instant query resolution in testing",
      "Reduced manual inquiry load for faculty",
      "Positive feedback from users during testing phase",
    ],
    challenges: [
      "Integrating LLMs with real-time campus data",
      "Handling accurate and relevant responses",
      "Designing a clean, accessible UX while keeping data private",
    ],
    learned: [
      "Real-world application of RAG and LLMs",
      "API-friendly backends with FastAPI",
      "Importance of testing, documentation and user feedback",
    ],
  },
  {
    slug: "sign-language",
    code: "04",
    name: "AI Sign Language Generation",
    category: "NLP / Computer Vision",
    status: "Public repo",
    summary:
      "Speech-to-sign-language system that converts spoken input into sign poses via NLP and a gloss-to-pose ML model.",
    problem:
      "Spoken language is not automatically accessible as visual sign poses for learners and Deaf users.",
    solution:
      "A Flask/Python pipeline: speech/text -> NLP glossing -> ML pose generation for sign language output.",
    architecture:
      "Speech/text -> NLP processing -> gloss sequence -> pose generation model -> rendered signs",
    highlights: [
      "End-to-end speech-to-sign workflow",
      "NLP plus gloss-to-pose modeling",
      "Python/Flask service for generation",
    ],
    stack: ["Flask", "Python", "NLP", "ML"],
    github: "https://github.com/DishantShahare358",
  },
  {
    slug: "freelancing-platform",
    code: "05",
    name: "Freelancing Platform",
    category: "Full-Stack Product",
    status: "Product build",
    summary:
      "A platform that connects clients and freelancers with secure payments, job management and real-time chat.",
    problem:
      "Clients and freelancers need a single place to find work, manage jobs and communicate without losing context.",
    solution:
      "Flutter + Django product with PostgreSQL storage, WebSockets chat and payment-aware job workflows.",
    architecture:
      "Client/Freelancer -> Flutter app -> Django API -> PostgreSQL + WebSockets chat",
    highlights: [
      "Job posting and freelancer discovery",
      "Secure payments and job management",
      "Real-time chat",
    ],
    stack: ["Flutter", "Django", "PostgreSQL", "WebSockets"],
  },
  {
    slug: "emotion-music",
    code: "06",
    name: "Emotion-Based Music Player",
    category: "Computer Vision",
    status: "Prototype",
    summary:
      "Music player that detects facial expressions with computer vision and plays tracks matched to mood.",
    problem:
      "Playlists are static; users still pick songs manually even when mood is visible on the face.",
    solution:
      "Detect emotion from camera input, classify mood, then recommend/play music through a player + Spotify API.",
    architecture:
      "Camera frame -> OpenCV face/emotion model -> mood class -> music recommendation -> playback",
    highlights: [
      "Facial expression detection",
      "Mood-aware playback",
      "Computer vision plus music APIs",
    ],
    stack: ["Python", "OpenCV", "TensorFlow", "Spotify API"],
  },
  {
    slug: "virtual-mouse",
    code: "07",
    name: "Virtual Mouse",
    category: "Human-Computer Interaction",
    status: "Experiment",
    summary:
      "Hand-gesture virtual mouse using computer vision so users can control a PC without a physical mouse.",
    problem:
      "Pointer control still depends on hardware even when a webcam can see the user's hands.",
    solution:
      "Track hands with OpenCV/MediaPipe and map gestures to cursor movement and clicks.",
    architecture:
      "Webcam -> MediaPipe landmarks -> gesture rules -> OS pointer events",
    highlights: [
      "Real-time hand tracking",
      "Click and move gestures",
      "Python vision pipeline",
    ],
    stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
  },
  {
    slug: "object-detection",
    code: "08",
    name: "Object Detection System",
    category: "Computer Vision",
    status: "Experiment",
    summary:
      "Real-time object detection using deep learning to classify objects from images and live camera feeds.",
    problem:
      "Manual inspection cannot label objects in live video at useful speed.",
    solution:
      "YOLO-style detection with OpenCV and TensorFlow/PyTorch on images and webcam streams.",
    architecture:
      "Image/camera -> YOLO detector -> bounding boxes + labels -> live overlay",
    highlights: [
      "Live camera detection",
      "Deep-learning object classes",
      "Vision model evaluation loop",
    ],
    stack: ["Python", "YOLO", "OpenCV", "TensorFlow"],
  },
];

export const experience = [
  {
    type: "Role",
    company: "Dataventics Software Solutions",
    role: "Full Stack Developer",
    period: "Feb 2025 – Aug 2025 · 6 months",
    location: "Nagpur, Maharashtra (On-site)",
    bullets: [
      "Built and deployed production-ready cross-platform applications using Flutter, covering the full lifecycle from design to release.",
      "Developed and maintained scalable web and mobile applications across frontend and backend.",
      "Integrated REST APIs, Firebase and third-party services for real-time functionality.",
      "Strengthened UI/UX and state-management practices while collaborating in code reviews, testing and deployment.",
    ],
    stack: ["Flutter", "Dart", "Node.js", "MySQL", "Firebase", "REST APIs", "Git"],
  },
  {
    type: "Internship",
    company: "Internship Studio",
    role: "Artificial Intelligence Intern",
    period: "July 2024 · 1 month",
    location: "Remote",
    bullets: [
      "Engineered a face recognition model using deep learning, from data collection and preprocessing through training and evaluation.",
      "Contributed to computer vision and NLP projects under mentor guidance.",
      "Applied model evaluation techniques to improve accuracy.",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
];

export const education = {
  school: "G. H. Raisoni College of Engineering and Management",
  degree: "B.Tech in Artificial Intelligence",
  period: "Nov 2022 – Jun 2026",
  location: "Nagpur, Maharashtra, India",
  affiliation: "Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University",
  cgpa: "8.2",
  subjects: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Operating Systems",
    "Cloud Computing",
    "Mathematics for AI",
  ],
  journey: [
    { year: "2022", text: "Started B.Tech, adapting to engineering fundamentals." },
    { year: "2023", text: "Built programming, data structures and core CS foundations." },
    { year: "2024", text: "Went deeper into AI/ML with mini projects and internships." },
    { year: "2025", text: "Applied knowledge through Hyreso, Crop Bazar and CampusGPT." },
    { year: "2026", text: "Graduating with shipped products and a public proof trail." },
  ],
};

export const certifications = [
  {
    group: "Resume credentials",
    items: [
      { name: "Artificial Intelligence Internship", org: "Internship Studio / Python Development" },
    ],
  },
  {
    group: "Technical certifications",
    items: [
      { name: "Introduction to Cloud Computing", org: "Google Cloud Skill Boost · Mar 2024" },
      { name: "Machine Learning with Python", org: "IBM SkillsBuild · Jan 2024" },
      { name: "Front-End Developer", org: "Meta · Feb 2024" },
      { name: "Azure Fundamentals (AZ-900)", org: "Microsoft · Apr 2024" },
    ],
  },
  {
    group: "Course certifications",
    items: [
      { name: "Flutter & Dart — The Complete Guide", org: "Udemy · Dec 2023" },
      { name: "Deep Learning Specialization", org: "Coursera · Feb 2024" },
      { name: "Responsive Web Design", org: "freeCodeCamp · Aug 2023" },
      { name: "Data Structures and Algorithms", org: "NPTEL · Jul 2023" },
    ],
  },
];

export const achievements = [
  'Served as Event In-Charge for “Test The Bug”, a bug-testing event at college.',
  "Judged an 8-hour hackathon organized by the company during internship.",
];

export const drives = [
  "Build useful products",
  "Solve real problems",
  "Keep learning new technologies",
  "Make an impact",
  "Collaborate with great people",
  "Be a better version of myself",
];

export const hobbies = [
  "Reading — tech blogs, AI research, self-improvement",
  "Gaming — strategy games, open worlds",
  "Photography — capturing moments and places",
  "Travel — exploring new cultures",
  "Fitness — stay active, stay focused",
  "Coffee — good ideas start with good coffee",
];

export const timeline = [
  {
    year: "2025",
    tag: "Product",
    title: "Hyreso on Play Store",
    text: "AI mock interviews and resume optimization shipped as a live career app.",
  },
  {
    year: "2025",
    tag: "Agritech",
    title: "Crop Bazar marketplace",
    text: "Flutter marketplace connecting farmers and buyers with listings and transactions.",
  },
  {
    year: "2025",
    tag: "GenAI",
    title: "CampusGPT RAG assistant",
    text: "Academic chatbot, paper generation and campus Q&A with a retrieval pipeline.",
  },
  {
    year: "2025",
    tag: "Role",
    title: "Full Stack Developer, Dataventics",
    text: "Six months shipping Flutter products with backend integration and release ownership.",
  },
  {
    year: "2024",
    tag: "AI",
    title: "AI intern + vision systems",
    text: "Face recognition internship plus sign-language, gesture and detection experiments.",
  },
];
