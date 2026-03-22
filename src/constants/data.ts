export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO_DATA = {
  tagline: "FORGE YOUR STRONGEST SELF",
  headline: "TRAIN HARD.\nTRANSFORM\nFASTER.",
  description:
    "Where iron meets determination. The Forge Gym is built for those who refuse to settle — push your limits, break barriers, and become unstoppable.",
  primaryCTA: { label: "Book Free Trial", href: "/contact" },
  secondaryCTA: { label: "Explore Programs", href: "/programs" },
  backgroundImage: "/images/hero/hero-bg.jpg",
  athleteImage: "/images/hero/hero-athlete.jpg",
  stats: [
    { value: "10K+", label: "Members Trained" },
    { value: "15+", label: "Expert Trainers" },
    { value: "50+", label: "Weekly Classes" },
    { value: "8+", label: "Years Strong" },
  ],
};

export const HIGHLIGHTS = [
  {
    icon: "dumbbell",
    title: "Strength Training",
    description: "State-of-the-art free weights and machines for maximum gains.",
  },
  {
    icon: "user",
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals and fitness level.",
  },
  {
    icon: "flame",
    title: "Fat Loss Programs",
    description: "High-intensity programs designed to shred fat and build lean muscle.",
  },
  {
    icon: "users",
    title: "Group Workouts",
    description: "Energizing group sessions that push you to perform at your peak.",
  },
  {
    icon: "zap",
    title: "Modern Equipment",
    description: "Premium machines and gear — constantly updated, always maintained.",
  },
  {
    icon: "trophy",
    title: "Expert Trainers",
    description: "Certified professionals who live and breathe fitness every day.",
  },
];

export const ABOUT_PREVIEW = {
  tagline: "WHO WE ARE",
  title: "More Than a Gym.\nA Training Ground.",
  description:
    "The Forge was built with one purpose: to create an environment where serious training happens. No gimmicks, no shortcuts — just raw dedication, expert coaching, and the tools you need to transform. Every piece of equipment, every program, and every trainer is here to help you become your strongest self.",
  image: "/images/gallery/gym-floor.jpg",
  features: [
    "10,000+ sq ft training floor",
    "Competition-grade equipment",
    "Dedicated strength zones",
    "Recovery & stretching area",
  ],
};

export const PROGRAMS = [
  {
    id: "strength",
    title: "Strength & Power",
    description:
      "Build raw strength with progressive overload programs designed by expert powerlifting coaches. From deadlifts to bench press — master the fundamentals.",
    image: "/images/programs/strength-power.jpg",
    features: ["Progressive overload", "Compound movements", "Periodized training", "Strength assessments"],
    level: "All Levels",
    duration: "60 min",
  },
  {
    id: "hiit",
    title: "HIIT & Conditioning",
    description:
      "Torch calories and boost your metabolism with high-intensity interval training. Fast-paced, heart-pumping workouts that deliver serious results.",
    image: "/images/programs/hiit-conditioning.jpg",
    features: ["Metabolic conditioning", "Circuit training", "Cardio bursts", "Fat burning"],
    level: "Intermediate",
    duration: "45 min",
  },
  {
    id: "personal",
    title: "Personal Training",
    description:
      "Get a fully customized training plan with one-on-one attention from our certified trainers. Your goals, your pace, your transformation.",
    image: "/images/programs/personal-training.jpg",
    features: ["Custom programming", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
    level: "All Levels",
    duration: "60 min",
  },
  {
    id: "group",
    title: "Group Training",
    description:
      "Train with a crew. Our group sessions combine strength, cardio, and functional movements in an electrifying team environment.",
    image: "/images/programs/group-training.jpg",
    features: ["Team motivation", "Varied workouts", "All fitness levels", "Community driven"],
    level: "All Levels",
    duration: "50 min",
  },
  {
    id: "boxing",
    title: "Boxing & Combat",
    description:
      "Learn striking fundamentals while getting an incredible full-body workout. Build coordination, speed, power, and mental toughness.",
    image: "/images/programs/boxing-combat.jpg",
    features: ["Striking technique", "Bag work", "Sparring basics", "Full-body conditioning"],
    level: "All Levels",
    duration: "60 min",
  },
  {
    id: "yoga",
    title: "Yoga & Mobility",
    description:
      "Restore, recover, and build flexibility with guided yoga and mobility sessions. The perfect complement to intense training days.",
    image: "/images/programs/yoga-mobility.jpg",
    features: ["Flexibility training", "Active recovery", "Breathwork", "Injury prevention"],
    level: "All Levels",
    duration: "55 min",
  },
];

export const MEMBERSHIP_PLANS = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for beginners ready to start their fitness journey.",
    features: [
      "Full gym access",
      "Locker room access",
      "2 group classes/week",
      "Fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "59",
    period: "month",
    description: "For dedicated athletes who want unlimited access and coaching.",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 PT session/month",
      "Nutrition consultation",
      "Priority booking",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "99",
    period: "month",
    description: "The ultimate package for total transformation and premium perks.",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Custom meal plans",
      "Recovery zone access",
      "Exclusive workshops",
      "Unlimited guest passes",
      "Premium merch quarterly",
    ],
    popular: false,
  },
];

export const TRAINERS = [
  {
    name: "Marcus Cole",
    role: "Head Strength Coach",
    bio: "Former competitive powerlifter with 12 years of coaching experience. Marcus specializes in building raw strength and helping athletes break through plateaus.",
    specialties: ["Powerlifting", "Strength", "Athletic Performance"],
    image: "/images/trainers/marcus-cole.jpg",
    certifications: ["NSCA-CSCS", "USAW Level 2"],
  },
  {
    name: "Sarah Chen",
    role: "HIIT & Conditioning Specialist",
    bio: "With a background in sports science and 8 years in fitness, Sarah designs high-intensity programs that deliver measurable results fast.",
    specialties: ["HIIT", "Fat Loss", "Metabolic Conditioning"],
    image: "/images/trainers/sarah-chen.jpg",
    certifications: ["ACE-CPT", "Precision Nutrition L1"],
  },
  {
    name: "James Rivera",
    role: "Boxing & Combat Coach",
    bio: "Professional boxing background with 10 years of coaching. James brings discipline, technique, and intensity to every session.",
    specialties: ["Boxing", "Kickboxing", "Self-Defense"],
    image: "/images/trainers/james-rivera.jpg",
    certifications: ["USA Boxing Coach", "NASM-CPT"],
  },
  {
    name: "Priya Sharma",
    role: "Yoga & Mobility Coach",
    bio: "500-hour certified yoga teacher who bridges the gap between intense training and mindful recovery. Priya helps athletes move better and recover faster.",
    specialties: ["Yoga", "Mobility", "Recovery"],
    image: "/images/trainers/priya-sharma.jpg",
    certifications: ["RYT-500", "FRC Mobility Specialist"],
  },
  {
    name: "Derek Okafor",
    role: "Personal Training Director",
    bio: "Passionate about transformations, Derek has helped hundreds of clients achieve goals they never thought possible. His holistic approach covers training, nutrition, and mindset.",
    specialties: ["Body Transformation", "Nutrition", "Lifestyle Coaching"],
    image: "/images/trainers/derek-okafor.jpg",
    certifications: ["NASM-CPT", "Precision Nutrition L2"],
  },
  {
    name: "Emma Larsson",
    role: "Group Fitness Lead",
    bio: "An energetic force of nature, Emma leads group sessions that are equal parts challenging and fun. Her classes are always the first to fill up.",
    specialties: ["Group Training", "Functional Fitness", "CrossFit"],
    image: "/images/trainers/emma-larsson.jpg",
    certifications: ["CrossFit L2", "ACE Group Fitness"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Michael Torres",
    role: "Member for 2 years",
    quote:
      "The Forge changed everything for me. I walked in 40 pounds overweight and walked out a completely different person. The trainers here don't just coach — they believe in you.",
    rating: 5,
  },
  {
    name: "Aisha Johnson",
    role: "Member for 1 year",
    quote:
      "I've been to a dozen gyms. The Forge is different. The energy, the equipment, the community — it's a place that makes you WANT to show up every single day.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Member for 3 years",
    quote:
      "As a competitive lifter, I need a gym that takes strength seriously. The Forge has the best equipment, the best coaches, and the best atmosphere I've ever trained in.",
    rating: 5,
  },
  {
    name: "Rachel Kim",
    role: "Member for 6 months",
    quote:
      "I was intimidated to join a 'serious' gym, but The Forge welcomed me from day one. The personal training program helped me build confidence and strength I never knew I had.",
    rating: 5,
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/gym-floor.jpg",
    alt: "Main training floor with modern equipment",
    category: "facility",
  },
  {
    src: "/images/gallery/deadlift-action.jpg",
    alt: "Athlete performing deadlift",
    category: "training",
  },
  {
    src: "/images/gallery/free-weights.jpg",
    alt: "Free weights area",
    category: "facility",
  },
  {
    src: "/images/gallery/hiit-workout.jpg",
    alt: "High-intensity group workout",
    category: "training",
  },
  {
    src: "/images/gallery/personal-training.jpg",
    alt: "Personal training session",
    category: "training",
  },
  {
    src: "/images/gallery/cardio-zone.jpg",
    alt: "Cardio zone with premium machines",
    category: "facility",
  },
  {
    src: "/images/gallery/boxing-area.jpg",
    alt: "Boxing and combat area",
    category: "training",
  },
  {
    src: "/images/gallery/gym-interior.jpg",
    alt: "Gym interior wide shot",
    category: "facility",
  },
  {
    src: "/images/gallery/kettlebell-training.jpg",
    alt: "Kettlebell training area",
    category: "training",
  },
  {
    src: "/images/gallery/battle-ropes.jpg",
    alt: "Athlete with battle ropes",
    category: "training",
  },
  {
    src: "/images/gallery/recovery-zone.jpg",
    alt: "Recovery and stretching zone",
    category: "facility",
  },
  {
    src: "/images/gallery/athletic-performance.jpg",
    alt: "Athletic performance training",
    category: "training",
  },
];

export const CONTACT_INFO = {
  address: "Ground Floor, A57, Zeta I, Greater Noida, Uttar Pradesh 201310",
  phone: "+1 (555) 234-5678",
  email: "info@theforgegym.com",
  whatsapp: "+15552345678",
  hours: [
    { day: "Monday - Saturday", time: "6:00 AM - 10:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    twitter: "#",
  },
};

export const WHY_CHOOSE_US = [
  {
    title: "Elite Equipment",
    description:
      "Over $500K invested in premium Rogue, Eleiko, and Hammer Strength equipment. Constantly maintained, never outdated.",
    icon: "dumbbell",
  },
  {
    title: "Expert Coaching",
    description:
      "Every trainer holds nationally recognized certifications with 5+ years of real coaching experience.",
    icon: "award",
  },
  {
    title: "Proven Results",
    description:
      "Over 10,000 members trained and thousands of successful body transformations achieved since day one.",
    icon: "trending-up",
  },
  {
    title: "Community Driven",
    description:
      "More than a gym — a tribe of dedicated individuals who push each other to be better every single day.",
    icon: "heart",
  },
  {
    title: "Open 18 Hours",
    description:
      "From 5 AM to 11 PM on weekdays. Early birds and night owls — we've got you covered.",
    icon: "clock",
  },
  {
    title: "Recovery Focused",
    description:
      "Dedicated stretching zones, foam rolling stations, and recovery protocols to keep you performing at your peak.",
    icon: "shield",
  },
];

export const FOOTER_DATA = {
  description:
    "The Forge Gym — where iron meets determination. Built for those who refuse to settle.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Trainers", href: "/trainers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "Strength & Power", href: "/programs#strength" },
    { label: "HIIT & Conditioning", href: "/programs#hiit" },
    { label: "Personal Training", href: "/programs#personal" },
    { label: "Group Training", href: "/programs#group" },
    { label: "Boxing & Combat", href: "/programs#boxing" },
  ],
};
