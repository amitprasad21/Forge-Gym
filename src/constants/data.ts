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
    { value: "100+", label: "Members & Growing" },
    { value: "1", label: "Expert Trainer" },
    { value: "3+", label: "Weekly Sessions" },
    { value: "2026", label: "Est. March" },
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
    "Established in March 2026, The Forge was built with one purpose: to create an environment where serious training happens. No gimmicks, no shortcuts — just raw dedication, expert coaching, and the tools you need to transform.",
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
    name: "1 Month",
    price: "2,000",
    period: "month",
    description: "Perfect for beginners ready to start their fitness journey.",
    features: [
      "Full gym access",
      "Locker room access",
      "Fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "3 Months",
    price: "4,500",
    period: "3 months",
    description: "Great value for dedicated individuals.",
    features: [
      "Everything in 1 Month",
      "1 PT session/month",
      "Nutrition consultation",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "6 Months",
    price: "7,000",
    period: "6 months",
    description: "Ideal for long-term consistency and visible results.",
    features: [
      "Everything in 3 Months",
      "Custom meal plans",
      "Recovery zone access",
      "Exclusive workshops",
    ],
    popular: false,
  },
  {
    name: "12 Months",
    price: "12,000",
    period: "12 months",
    description: "The ultimate package for total transformation.",
    features: [
      "Everything in 6 Months",
      "Unlimited guest passes",
      "Premium merch quarterly",
      "VIP locker access",
    ],
    popular: false,
  },
];

export const TRAINERS = [
  {
    name: "Yash Rathod",
    role: "Head Strength Coach",
    bio: "Passionate about building strength from the ground up, Yash brings a holistic approach to every client — covering training, nutrition, and mindset to help you hit goals you never thought possible.",
    specialties: ["Powerlifting", "Strength", "Athletic Performance"],
    image: "/images/trainers/gym_g1.png",
    certifications: ["NSCA-CSCS", "USAW Level 2"],
    socials: {
      instagram: "https://www.instagram.com/yashfit_0/",
      facebook: "https://www.facebook.com/yashh.rathod.1/",
      threads:
        "https://www.threads.com/@yashfit_0?xmt=AQF0hyESdN9LcfGIORuilcE4BjWQkExBKGU3Zdao3smUkSc",
    },
  },
];

export const FOUNDER_INFO = {
  name: "Jeet Singh",
  role: "Founder & Owner",
  phone: "7017799025",
  whatsapp: "917017799025",
  bio: "A passionate fitness enthusiast and entrepreneur, Jeet Singh founded The Forge with a singular vision — to build a training ground where serious athletes and everyday lifters alike can push past their limits. With a deep commitment to quality equipment, expert coaching, and an unbreakable community, Jeet has created more than a gym — he has built a movement that transforms lives from the inside out.",
  image: "/images/owner/jt.png",
  socials: {
    instagram: "https://www.instagram.com/jeetsinghfitness/?hl=en",
    threads:
      "https://www.threads.com/@jeetsinghfitness?xmt=AQF0mcra72CnA1fYCNKEtiQ-V3J0Em6HgEDIk5pI0iDz4hU",
    youtube: "https://www.youtube.com/channel/UCMwm00-DZGOZm5x5rhOoWog",
  },
};

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Founding Member",
    quote:
      "The Forge changed everything for me. I walked in on their opening day in March 2026 overweight, and I've already walked out a completely different person. The trainers here don't just coach — they believe in you.",
    rating: 5,
    avatar: "/images/testimonials/priya-sharma.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Member since March 2026",
    quote:
      "I've been to a dozen gyms. This new facility is different. The energy, the rogue equipment, the community — it's a place that makes you WANT to show up every single day.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Amit Kumar",
    role: "Founding Member",
    quote:
      "As a competitive lifter, I need a gym that takes strength seriously. The Forge has the best equipment, the best coaches, and the best atmosphere I've ever trained in since they opened.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Patel",
    role: "Member since March 2026",
    quote:
      "I was intimidated to join a 'serious' gym, but The Forge welcomed me warmly. The personal training program helped me build confidence and strength I never knew I had.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/gym1.jpeg",
    alt: "Main gym floor",
    category: "facility",
  },
  {
    src: "/images/gallery/gym2.jpeg",
    alt: "Gym equipment",
    category: "facility",
  },
  {
    src: "/images/gallery/gym3.jpeg",
    alt: "Free weights area",
    category: "facility",
  },
  {
    src: "/images/gallery/gym4.jpeg",
    alt: "Training area",
    category: "training",
  },
  {
    src: "/images/gallery/gym-interior.jpeg",
    alt: "Gym interior wide shot",
    category: "facility",
  },
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
    src: "/images/gallery/kettlebell-training.jpg",
    alt: "Kettlebell training session",
    category: "training",
  },
  {
    src: "/images/gallery/boxing-area.jpg",
    alt: "Boxing and combat area",
    category: "training",
  },
  {
    src: "/images/gallery/athletic-performance.jpg",
    alt: "Athletic performance training",
    category: "training",
  },
];

export const CONTACT_INFO = {
  address: "Ground Floor, A57, Zeta I, Greater Noida, Uttar Pradesh 201310",
  phone: "7017799025",
  email: "Jeetutk750@gmail.com",
  whatsapp: "917017799025",
  hours: [
    { day: "Monday - Saturday", time: "5:00 AM - 11:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: {
    instagram: "https://www.instagram.com/yashfit_0/",
    facebook: "https://www.facebook.com/yashh.rathod.1/",
    threads: "https://www.threads.com/@yashfit_0?xmt=AQF0hyESdN9LcfGIORuilcE4BjWQkExBKGU3Zdao3smUkSc",
  },
  owner: "Jeet Singh",
  whatsappMessage: "Hi! I'm interested in joining The Forge. Can you tell me about your membership plans?",
};

export const WHY_CHOOSE_US = [
  {
    title: "Elite Equipment",
    description:
      "Premium Rogue, Eleiko, and Hammer Strength equipment — hand-picked and constantly maintained for peak performance.",
    icon: "dumbbell",
  },
  {
    title: "Expert Coaching",
    description:
      "Our trainers hold nationally recognized certifications and bring years of real coaching experience to every session.",
    icon: "award",
  },
  {
    title: "Proven Results",
    description:
      "Real transformations happening every week since our launch in March 2026. Our members' results speak for themselves.",
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
