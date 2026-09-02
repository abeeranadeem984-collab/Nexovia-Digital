import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Monitor,
  Layers,
  ShieldCheck,
  Search,
  GraduationCap,
  Award,
  BookOpen,
  MessageSquare,
  Play,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Globe,
  Palette,
  Code,
  Video,
  Send,
  ExternalLink,
  Users,
  Clock,
  Zap,
  Target,
  FileText,
  ShoppingBag
} from 'lucide-react';

/* =========================================================================
   1. TYPES & INTERFACES
   ========================================================================= */

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  popular?: boolean;
}

interface CourseItem {
  id: string;
  name: string;
  category: 'E-Commerce' | 'Design' | 'Development' | 'Content' | 'Freelancing';
  duration: string;
  pricePKR: string;
  originalPricePKR: string;
  level: string;
  isPremium?: boolean;
  instructor: string;
  badge?: string;
  description: string;
  syllabus: string[];
  image: string;
  rating: number;
  studentsCount: number;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  results: string;
  image: string;
  tags: string[];
  description: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  type: 'Student' | 'Client';
  avatar: string;
  content: string;
  rating: number;
  badge: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/* =========================================================================
   2. DATA ARRAYS
   ========================================================================= */

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'performance-marketing',
    title: 'Performance Marketing & Paid Ads',
    category: 'Marketing',
    icon: TrendingUp,
    popular: true,
    description: 'Data-driven paid ad campaigns across Meta (Facebook & Instagram), Google Ads, and TikTok designed to scale ROAS and drive high-intent sales.',
    deliverables: [
      'Meta Pixel, CAPI & Conversion Setup',
      'High-Converting Ad Copy & Creative Design',
      'Audience Research & Lookalike Scaling',
      'Weekly ROAS & Performance Tracking'
    ]
  },
  {
    id: 'web-development',
    title: 'Custom Web & E-Commerce Development',
    category: 'Development',
    icon: Code,
    popular: true,
    description: 'Ultra-fast, high-converting websites and scalable online stores engineered using React, Next.js, WordPress, and WooCommerce.',
    deliverables: [
      'Custom Responsive UI/UX Design',
      'SEO-Optimized Speed & Clean Architecture',
      'Payment Gateway & Checkout Integration',
      'CMS Training & 30-Day Tech Support'
    ]
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Visual Design',
    category: 'Design',
    icon: Palette,
    description: 'Memorable brand systems, logos, packaging design, and social media creative assets that position your business as a market leader.',
    deliverables: [
      'Logo Systems & Comprehensive Brand Guidelines',
      'Social Media Ad Templates & Carousels',
      'Corporate PDF Decks & Company Profiles',
      'Print-Ready Packaging & Vector Assets'
    ]
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    category: 'Media',
    icon: Video,
    description: 'Engaging short-form TikTok/Reels, YouTube edits, and commercial motion ads designed to capture attention and maximize audience retention.',
    deliverables: [
      'Viral Short-Form Reels & TikTok Edits',
      'Dynamic Subtitles & Motion Typography',
      'Sound Design, B-Roll & Color Grading',
      'YouTube Video Production Workflows'
    ]
  },
  {
    id: 'seo-content',
    title: 'SEO & Organic Growth Strategies',
    category: 'Growth',
    icon: Globe,
    description: 'Comprehensive search engine optimization and authority content writing that ranks on Google and drives organic inbound leads.',
    deliverables: [
      'Technical SEO Audit & Keyword Mapping',
      'High-DA Backlink Acquisition Strategies',
      'SEO Blog Articles & Sales Copywriting',
      'Google Search Console & Analytics Setup'
    ]
  },
  {
    id: 'ecommerce-scaling',
    title: 'Global E-Commerce & Store Management',
    category: 'E-Commerce',
    icon: ShoppingBag,
    description: 'End-to-end management for eBay, Shopify, and Amazon stores including product sourcing, listing optimization, and order fulfillment.',
    deliverables: [
      'Profitable Product Hunting & Sourcing',
      'High-Ranking SEO Titles & Listing HTML',
      'Worldwide Shipping & Logistics Guidance',
      'Account Health & Customer Support Ops'
    ]
  }
];

const COURSES_DATA: CourseItem[] = [
  {
    id: 'ebay-ecommerce',
    name: 'eBay Selling & E-Commerce',
    category: 'E-Commerce',
    duration: '1 Month',
    pricePKR: 'PKR 15,000',
    originalPricePKR: 'PKR 30,000',
    level: 'Advanced',
    isPremium: true,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Advanced Premium Masterclass',
    description: 'Comprehensive, end-to-end practical eBay master training. Covers international account creation, product hunting, listing SEO, selling strategies, worldwide shipping, and 1-on-1 mentorship.',
    syllabus: [
      'eBay Account Setup & Verification Guidance',
      'High-Margin International Product Hunting',
      'SEO Item Titles, Descriptions & HTML Templates',
      'Winning Pricing Formulas & Profit Calculations',
      'Worldwide Shipping & Customs Logistics',
      'Account Health, Returns & Scaling Strategies',
      'Dedicated 1-on-1 Mentorship & WhatsApp Support'
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    studentsCount: 140
  },
  {
    id: 'graphic-designing',
    name: 'Graphic Designing',
    category: 'Design',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Master Adobe Photoshop, Illustrator, visual branding, social media ad creatives, typography, and commercial design portfolios with practical assignments.',
    syllabus: [
      'Design Fundamentals, Typography & Color Theory',
      'Adobe Photoshop Photo Manipulation & Retouching',
      'Adobe Illustrator Vector Graphics & Logo Design',
      'Social Media Ad Creatives & Marketing Banners',
      'Client Portfolio Creation & Direct Mentorship'
    ],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    studentsCount: 220
  },
  {
    id: 'content-writing',
    name: 'Content Writing & Copywriting',
    category: 'Content',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Hands-on practical training in SEO blog writing, sales copywriting formulas (AIDA, PAS), client pitch proposals, and building a high-income freelance writing portfolio.',
    syllabus: [
      'SEO Blog Articles & Keyword Intent Mapping',
      'Persuasive Copywriting for Sales & Landing Pages',
      'Ad Copy, Social Media Captions & Email Sequences',
      'Client Pitching, Winning Proposals & Cold Outreach',
      'Writing Portfolio Review & Lifetime Mentorship'
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    studentsCount: 310
  },
  {
    id: 'wordpress-dev',
    name: 'WordPress Web Development',
    category: 'Development',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Build professional corporate websites and full WooCommerce online stores using Elementor and modern plugins without writing code.',
    syllabus: [
      'Domain, Hosting Setup & WordPress Installation',
      'Elementor Page Builder Mastery & Custom Layouts',
      'WooCommerce Online Store & Payment Gateways',
      'Speed Optimization, Security & Essential SEO',
      'Client Website Delivery & Freelance Client Pitching'
    ],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    studentsCount: 190
  },
  {
    id: 'canva-designing',
    name: 'Canva Designing',
    category: 'Design',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Fast-track design masterclass using Canva Pro to create stunning commercial carousels, business brand kits, reels, brochures, and client presentations.',
    syllabus: [
      'Canva Pro Architecture, Brand Kits & Palette Setup',
      'High-Converting Social Media Carousels & Posts',
      'Short Video Editing, Reel Templates & Animation',
      'eBook, Client Pitch Deck & Print Asset Formatting',
      'Freelance Design Strategies & WhatsApp Mentorship'
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    studentsCount: 420
  },
  {
    id: 'pdf-designing',
    name: 'PDF Designing & Formatting',
    category: 'Design',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Learn professional digital document formatting, eBook layout design, interactive fillable forms, lead magnets, and corporate catalog design.',
    syllabus: [
      'Grid Systems, Typography & Editorial Layouts',
      'High-Converting Lead Magnet & eBook Design',
      'Interactive Fillable PDF Forms & Checkboxes',
      'Corporate Profiles, Annual Reports & Catalogs',
      'Print vs. Web Compression Standards & Delivery'
    ],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    studentsCount: 160
  },
  {
    id: 'youtube-growth',
    name: 'YouTube Channel Creation & Growth',
    category: 'Content',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Complete roadmap to launch, optimize, and monetize high-growth YouTube channels with AI scriptwriting, viral thumbnail design, and video SEO.',
    syllabus: [
      'High-CPM Niche Research & Competitor Analysis',
      'AI Scriptwriting, Storyboarding & Voiceover Tools',
      'High-CTR Click-Driven Thumbnail Design Principles',
      'YouTube Video SEO, Tags & Algorithm Strategies',
      'Monetization, Sponsorships & Affiliate Revenue'
    ],
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    studentsCount: 280
  },
  {
    id: 'fiverr-freelancing',
    name: 'Fiverr Freelancing Masterclass',
    category: 'Freelancing',
    duration: '1 Month',
    pricePKR: 'PKR 6,000',
    originalPricePKR: 'PKR 12,000',
    level: 'Beginner to Advanced',
    isPremium: false,
    instructor: 'Abeera Nadeem Bajwa',
    badge: 'Practical Career Skill',
    description: 'Learn how to create high-ranking Fiverr gigs, optimize keywords, communicate with foreign buyers, and achieve Level 1 & Level 2 seller status.',
    syllabus: [
      'Fiverr Algorithm & Profitable Niche Research',
      'High-Ranking Gig SEO, Titles, Descriptions & Tags',
      'Buyer Communication, Custom Offers & Upselling',
      'Order Delivery Standards & 5-Star Reviews',
      'Handling Client Conflicts & Scaling Orders'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    studentsCount: 350
  }
];

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Growth: 4.8X ROAS Campaign',
    category: 'Performance Marketing',
    client: 'Luxe Apparel Global',
    results: '+380% Revenue in 60 Days',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Meta Ads', 'Funnel Design', 'Pixel CAPI'],
    description: 'Redesigned the entire paid social acquisition funnel, implemented advanced Lookalike targeting, and scaled monthly revenue from $12k to $58k.'
  },
  {
    id: '2',
    title: 'Modern SaaS Corporate Portal & Brand Kit',
    category: 'Web Development',
    client: 'Nexus Data Systems',
    results: '0.6s Load Speed, +65% Conversion',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    description: 'Engineered a high-performance web platform with smooth animations, custom analytics integration, and clear onboarding funnels.'
  },
  {
    id: '3',
    title: 'Global eBay Store Sourcing & Scaling',
    category: 'E-Commerce Management',
    client: 'Apex Global Trade',
    results: 'Top-Rated Seller, $42k Monthly Sales',
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80',
    tags: ['eBay Sourcing', 'SEO Titles', 'Order Ops'],
    description: 'Sourced winning consumer electronics products, created optimized listing graphics, and structured international shipping fulfillment.'
  }
];

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Hamza Tariq',
    role: 'Freelance Graphic Designer',
    type: 'Student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'The Canva and Graphic Designing course completely changed my freelancing journey. Abeera Ma’am provided direct feedback on my portfolio. Within 3 weeks of completion, I landed my first international client on Upwork!',
    rating: 5,
    badge: 'Academy Graduate'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Founder, Aurelia Skincare UK',
    type: 'Client',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Nexovia Digital managed our Meta ad campaigns and redesigned our Shopify store. Their team is exceptionally skilled, transparent with metrics, and delivered a 4.5X ROAS consistently over 4 months.',
    rating: 5,
    badge: 'Agency Retainer Client'
  },
  {
    id: '3',
    name: 'Usman Ali',
    role: 'eBay Power Seller',
    type: 'Student',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The eBay Selling & E-Commerce course (PKR 15,000) was worth every single rupee. The mentorship on shipping solutions and product hunting was practical, authentic, and step-by-step.',
    rating: 5,
    badge: 'Premium Masterclass Alum'
  }
];

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'How do I enroll in a course and what is the payment process?',
    answer: 'Course enrollment is completed directly through our official WhatsApp (+92 347 6811866). Click the "Enroll Now on WhatsApp" button on your selected course card to connect with our admissions team for Bank Transfer/EasyPaisa/JazzCash details and instant seat confirmation.'
  },
  {
    id: '2',
    question: 'Are all courses conducted live or recorded?',
    answer: 'Our courses feature interactive online live sessions with step-by-step practical demonstrations, along with lifetime access to session recordings, assignments, and dedicated WhatsApp group support with the instructor.'
  },
  {
    id: '3',
    question: 'What is included in the eBay Selling & E-Commerce course (PKR 15,000)?',
    answer: 'The eBay masterclass is an advanced flagship program including account setup guidance, international product hunting, high-converting listing creation, international shipping solutions, customs handling, and personalized 1-on-1 mentorship.'
  },
  {
    id: '4',
    question: 'How do we start an agency project with Nexovia Digital?',
    answer: 'You can submit the consultation form below or message us directly on WhatsApp. We schedule a free 30-minute discovery call to understand your business goals, outline a scope of work, and provide a clear timeline and milestone-based proposal.'
  }
];

/* =========================================================================
   3. MAIN COMPONENT (App.tsx)
   ========================================================================= */

export default function App() {
  // Navigation & Theme States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCourseCategory, setActiveCourseCategory] = useState<string>('All');
  const [courseSearch, setCourseSearch] = useState<string>('');
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Performance Marketing',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqId, setOpenFaqId] = useState<string>('1');

  // Stats Counter Animation
  const [stats, setStats] = useState({ clients: 0, revenue: 0, students: 0, roas: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ clients: 120, revenue: 2.4, students: 1850, roas: 4.8 });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Construct pre-filled WhatsApp message
    const msg = `*New Nexovia Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.serviceInterest}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/923476811866?text=${msg}`, '_blank');
  };

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchCat = activeCourseCategory === 'All' || course.category === activeCourseCategory;
    const matchSearch =
      course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
      course.description.toLowerCase().includes(courseSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#070a12] text-gray-100 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      
      {/* =========================================================================
          STICKY HEADER / NAVIGATION BAR
          ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#070a12]/90 backdrop-blur-md border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                NEXOVIA
              </span>
              <span className="text-blue-500 font-bold text-xl ml-1">DIGITAL</span>
              <span className="block text-[9px] uppercase tracking-widest text-gray-400 font-semibold">
                Agency & Academy
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <button onClick={() => scrollToSection('hero')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('courses')} className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1.5 text-blue-400 font-bold">
              <span>Courses</span>
              <span className="bg-blue-600/30 text-blue-300 text-[10px] px-1.5 py-0.5 rounded-full border border-blue-500/30">
                Academy
              </span>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Contact
            </button>
          </nav>

          {/* CTA & WHATSAPP BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/923476811866"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-emerald-400 border border-emerald-500/40 rounded-xl hover:bg-emerald-500/10 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +92 347 6811866</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/40 cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1d] border-b border-gray-800 px-6 py-6 space-y-4">
            <div className="flex flex-col gap-3 font-semibold text-gray-200">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 hover:text-blue-400">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-blue-400">
                Agency Services
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-left py-2 text-blue-400 font-bold flex items-center justify-between">
                <span>Nexovia Academy Courses</span>
                <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">New Batch</span>
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 hover:text-blue-400">
                Recent Work & Portfolio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left py-2 hover:text-blue-400">
                Student & Client Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-blue-400">
                Contact & Consultation
              </button>
            </div>
            <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
              <a
                href="https://wa.me/923476811866"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 347 6811866)</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-blue-600 text-white rounded-xl text-center text-xs font-bold shadow-md shadow-blue-600/30"
              >
                Book Free Consultation Call
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section id="hero" className="relative pt-16 pb-24 overflow-hidden">
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* TOP TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Full-Stack Digital Growth & Practical Academy</span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.12]">
            We Scale Businesses & Train the Next Generation of{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Digital Leaders.
            </span>
          </h1>

          {/* SUB-HEADLINE */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Nexovia Digital combines a high-performance marketing and development agency with an elite, practical skills academy in Pakistan. From Meta Ads to global eBay scaling, we deliver real revenue.
          </p>

          {/* DUAL CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('courses')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <GraduationCap className="w-5 h-5 text-blue-200" />
              <span>Explore Academy Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#111626] hover:bg-[#161d31] text-gray-200 hover:text-white font-bold text-sm rounded-2xl border border-gray-700/80 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Hire Us for Your Business</span>
            </button>
          </div>

          {/* TRUST BADGE / HIGHLIGHTS */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#0e1424]/80 border border-gray-800 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">{stats.clients}+</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Global Clients Scaled</div>
            </div>
            <div className="bg-[#0e1424]/80 border border-gray-800 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-blue-400">${stats.revenue}M+</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Client Ad Spend Managed</div>
            </div>
            <div className="bg-[#0e1424]/80 border border-gray-800 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">{stats.students}+</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Students Mentored</div>
            </div>
            <div className="bg-[#0e1424]/80 border border-gray-800 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">{stats.roas}X</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Average Campaign ROAS</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          AGENCY SERVICES SECTION
          ========================================================================= */}
      <section id="services" className="py-24 bg-[#090d19] border-t border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Spectrum Agency Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Engineered for Measurable ROI & Revenue Growth
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We execute high-impact digital marketing, technical web development, brand identity, and global e-commerce operations tailored for ambitious brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#0f1527] border border-gray-800/90 rounded-3xl p-8 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <IconComp className="w-7 h-7" />
                      </div>
                      {service.popular && (
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                          High Demand
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-4 border-t border-gray-800/80 space-y-2.5">
                      <div className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
                        Key Deliverables:
                      </div>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full py-3 bg-[#172036] hover:bg-blue-600 text-gray-200 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Inquire About Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEXOVIA ACADEMY / COURSES SECTION
          ========================================================================= */}
      <section id="courses" className="py-24 bg-[#070a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* ACADEMY SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400 text-xs font-extrabold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Nexovia Digital Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Practical, Career-Focused Online Masterclasses
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Learn in-demand digital skills with step-by-step practical training, live assignments, portfolio creation, and direct 1-on-1 mentorship via WhatsApp.
            </p>

            {/* PAYMENT / REGISTRATION NOTICE */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold text-left sm:text-center mt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct WhatsApp Seat Registration & Payment Verification (+92 347 6811866)</span>
            </div>
          </div>

          {/* FILTER & SEARCH BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-800">
            {/* CATEGORIES */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {['All', 'E-Commerce', 'Design', 'Development', 'Content', 'Freelancing'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCourseCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCourseCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-[#111626] text-gray-400 hover:text-white hover:bg-[#161d31]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SEARCH INPUT */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search courses..."
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                className="w-full bg-[#111626] border border-gray-700/80 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-2.5" />
            </div>
          </div>

          {/* COURSE CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredCourses.map((course) => {
              const isEbay = course.isPremium;

              return (
                <div
                  key={course.id}
                  className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    isEbay
                      ? 'bg-gradient-to-b from-amber-500/10 via-[#0e1424] to-[#0e1424] border-2 border-amber-500/70 shadow-2xl shadow-amber-500/15'
                      : 'bg-[#0e1424] border border-gray-800 hover:border-blue-500/60 shadow-xl'
                  }`}
                >
                  {/* PREMIUM RIBBON FOR EBAY */}
                  {isEbay && (
                    <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider py-1.5 text-center flex items-center justify-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>Advanced Premium Flagship Course</span>
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}

                  <div>
                    {/* IMAGE & TOP BADGES */}
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg ${
                          isEbay ? 'bg-amber-500 text-slate-950' : 'bg-blue-600 text-white'
                        }`}>
                          Duration: {course.duration}
                        </span>
                        <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg flex items-center gap-1">
                          <Monitor className="w-3 h-3" />
                          <span>Online Live</span>
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>Certificate</span>
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                        <span className="text-amber-300 font-bold text-[11px] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Instructor: {course.instructor}</span>
                        </span>
                        <span className="text-white text-[11px] font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{course.rating.toFixed(1)}</span>
                        </span>
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isEbay ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {course.category}
                        </span>
                        <h3 className={`text-xl font-bold mt-2 ${
                          isEbay ? 'text-amber-300' : 'text-white'
                        }`}>
                          {course.name}
                        </h3>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                        {course.description}
                      </p>

                      {/* SYLLABUS POINTS */}
                      <div className="pt-3 border-t border-gray-800 space-y-2">
                        <div className={`text-[11px] font-bold uppercase tracking-wider ${
                          isEbay ? 'text-amber-400' : 'text-blue-400'
                        }`}>
                          Course Syllabus Highlights:
                        </div>
                        {course.syllabus.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                              isEbay ? 'text-amber-400' : 'text-emerald-400'
                            }`} />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* PRICING DISPLAY */}
                      <div className={`pt-4 flex items-center justify-between border-t ${
                        isEbay ? 'border-amber-500/30' : 'border-gray-800'
                      }`}>
                        <div>
                          <div className="text-[10px] font-bold uppercase text-gray-500">Course Fee</div>
                          <div className="text-[10px] text-emerald-400 font-bold">
                            {isEbay ? '★ 1-on-1 Mentorship' : '✓ Full Access Included'}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-black ${
                            isEbay ? 'text-amber-400' : 'text-blue-400'
                          }`}>
                            {course.pricePKR}
                          </div>
                          <div className="text-xs text-gray-500 line-through font-semibold">
                            {course.originalPricePKR}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="p-6 pt-0 space-y-2">
                    <a
                      href={`https://wa.me/923476811866?text=${encodeURIComponent(
                        `Hello Nexovia Digital, I want to enroll in ${course.name} (${course.pricePKR}). Please provide enrollment and payment details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                        isEbay
                          ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-black shadow-amber-500/30'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enroll Now on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSelectedCourseModal(course)}
                      className="w-full py-2 bg-[#161d31] hover:bg-[#1d2742] text-gray-300 hover:text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View Full Syllabus & Details</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO / CASE STUDIES SECTION
          ========================================================================= */}
      <section id="portfolio" className="py-24 bg-[#090d19] border-t border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured Client Case Studies & Results
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore how we've helped direct-to-consumer e-commerce brands, global enterprises, and regional startups scale their revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-[#0f1527] border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1527] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 bg-blue-600/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-gray-400 font-semibold">{item.client}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] bg-[#172036] text-gray-300 px-2 py-0.5 rounded font-medium">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold text-center">
                    Result: {item.results}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS & REVIEWS SECTION
          ========================================================================= */}
      <section id="testimonials" className="py-24 bg-[#070a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
              <span>Social Proof & Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Trusted by Ambitious Students & Global Brands
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Read real experiences from graduates who launched their freelancing careers and founders who scaled with our agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((review) => (
              <div
                key={review.id}
                className="bg-[#0e1424] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                      {review.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-800 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-blue-500/40"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{review.name}</div>
                    <div className="text-[11px] text-gray-400">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <section className="py-20 bg-[#090d19] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm">Everything you need to know about our courses, agency workflows, and enrollment.</p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#0f1527] border border-gray-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between text-sm font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-90 text-blue-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-gray-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          CONTACT & CONSULTATION BOOKING SECTION
          ========================================================================= */}
      <section id="contact" className="py-24 bg-[#070a12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: INFO */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Let's Build Something Remarkable</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Scale Your Brand or Master a New Digital Skill?
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you need a full-funnel performance marketing strategy, custom e-commerce web build, or enrollment details for our practical academy courses, our team is here to assist.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 uppercase font-bold">Direct Phone / WhatsApp</div>
                    <div className="font-bold text-white">+92 347 6811866</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 uppercase font-bold">Official Inquiries</div>
                    <div className="font-bold text-white">contact@nexoviadigital.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-500 uppercase font-bold">Headquarters</div>
                    <div className="font-bold text-white">Lahore / Islamabad, Pakistan (Global Remote)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONSULTATION FORM */}
            <div className="lg:col-span-7 bg-[#0f1527] border border-gray-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Book a Strategy Session</h3>
              <p className="text-xs text-gray-400 mb-6">Fill out the form below. Our director will review your inquiry within 24 hours.</p>

              {formSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Forwarded via WhatsApp!</h4>
                  <p className="text-xs text-gray-300">Thank you for reaching out. A confirmation chat has been generated for direct response.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-bold text-blue-400 underline cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#161d31] border border-gray-700 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="ali@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#161d31] border border-gray-700 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#161d31] border border-gray-700 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5">Interest Area *</label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-[#161d31] border border-gray-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Performance Marketing">Agency: Performance Marketing (Paid Ads)</option>
                        <option value="Web Development">Agency: Custom Web & E-Commerce Build</option>
                        <option value="Brand Identity">Agency: Brand Identity & Graphic Design</option>
                        <option value="Academy eBay Course">Academy: eBay Selling (PKR 15,000)</option>
                        <option value="Academy Skill Course">Academy: Practical Skill Course (PKR 6,000)</option>
                        <option value="General Consultation">General Partnership / Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5">Project Overview / Goals *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your business goals, target monthly revenue, or specific skills you want to learn..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#161d31] border border-gray-700 rounded-xl p-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry & Open Direct WhatsApp Chat</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SYLLABUS DETAIL MODAL
          ========================================================================= */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0e1424] border border-gray-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedCourseModal(null)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-gray-800/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded">
                {selectedCourseModal.category}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedCourseModal.name}</h3>
              <p className="text-xs text-gray-400">{selectedCourseModal.description}</p>
            </div>

            <div className="bg-[#141b2d] p-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400">Total Fee:</span>
                <div className="text-2xl font-black text-blue-400">{selectedCourseModal.pricePKR}</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400">Duration:</span>
                <div className="text-sm font-bold text-white">{selectedCourseModal.duration} (Online)</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Complete Course Syllabus</h4>
              <div className="space-y-2">
                {selectedCourseModal.syllabus.map((syl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 bg-[#141b2d]/60 p-2.5 rounded-xl border border-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{syl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/923476811866?text=${encodeURIComponent(
                  `Hello Nexovia Digital, I want to confirm my registration in ${selectedCourseModal.name} (${selectedCourseModal.pricePKR}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl text-center shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Enrollment via WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedCourseModal(null)}
                className="py-3.5 px-6 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold text-xs rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MULTI-COLUMN FOOTER
          ========================================================================= */}
      <footer className="bg-[#050811] border-t border-gray-800/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* BRAND COL */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5">
                  <div className="w-full h-full bg-[#070a12] rounded-[6px] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                <span className="font-extrabold text-lg text-white">NEXOVIA DIGITAL</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Nexovia Digital is a premier growth agency and practical digital skills academy. We empower global businesses to scale revenue and mentor ambitious individuals to achieve financial independence.
              </p>
              <div className="text-xs text-gray-400 font-medium pt-2">
                Official Helpline: <span className="text-emerald-400 font-bold">+92 347 6811866</span>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Navigation</h4>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-blue-400">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-400">Agency Services</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-blue-400">Academy Courses</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-400">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400">Student Reviews</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400">Consultation</button></li>
              </ul>
            </div>

            {/* ACADEMY COURSES */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Courses (PKR)</h4>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li className="text-amber-300 font-bold">• eBay Selling (PKR 15,000)</li>
                <li>• Graphic Designing (PKR 6,000)</li>
                <li>• Content Writing (PKR 6,000)</li>
                <li>• WordPress Dev (PKR 6,000)</li>
                <li>• Canva Designing (PKR 6,000)</li>
                <li>• PDF Formatting (PKR 6,000)</li>
                <li>• YouTube Growth (PKR 6,000)</li>
                <li>• Fiverr Freelancing (PKR 6,000)</li>
              </ul>
            </div>

            {/* AGENCY SERVICES */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">Agency Solutions</h4>
              <ul className="space-y-2 text-xs text-gray-400 font-medium">
                <li>• Performance Paid Ads (Meta/Google)</li>
                <li>• E-Commerce Store Scaling</li>
                <li>• Full-Stack Web Development</li>
                <li>• Brand Identity & Social Creatives</li>
                <li>• Short-Form Video & Motion FX</li>
                <li>• Organic SEO & Copywriting</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
            <div>
              &copy; {new Date().getFullYear()} Nexovia Digital. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300">Privacy Policy</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300">Terms of Service</button>
              <a href="https://wa.me/923476811866" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                Direct WhatsApp Support
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
