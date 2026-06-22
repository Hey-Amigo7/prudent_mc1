import type {
  NavLink,
  Service,
  TeamMember,
  Testimonial,
  Statistic,
  FAQ,
  CoreValue,
  TimelineEvent,
  CarouselImage,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const STATISTICS: Statistic[] = [
  { value: "5,000", suffix: "+", label: "Clients Empowered" },
  { value: "1,800", suffix: "+", label: "Clients Served" },
  { value: "98", suffix: "%", label: "Client Satisfaction Rate" },
];

export const SERVICES: Service[] = [
  {
    id: "business-loan",
    icon: "Building2",
    title: "Business Loan",
    description:
      "Our business loans carry an interest rate of 6% and are designed to give small businesses the financial support they need to expand operations, restock goods, purchase equipment, or manage day-to-day business activities. We offer flexible repayment schedules tailored to different business needs.",
    features: [
      "6% interest rate",
      "Expand operations & restock goods",
      "Purchase equipment or manage cash flow",
      "Flexible repayment schedules",
      "10% compulsory savings (fully refunded after final repayment)",
    ],
    color: "gold",
  },
  {
    id: "salary-loan",
    icon: "TrendingUp",
    title: "Salary / Personal Loan",
    description:
      "Our salary and personal loans carry an interest rate of 8% and are built for salary workers who need quick financial support. Clients can access short-term or medium-term loans based on their monthly income and repayment ability, with repayments made in flexible monthly installments from salary earnings.",
    features: [
      "8% interest rate",
      "Short-term or medium-term loan options",
      "Loan amount based on monthly income",
      "Monthly installment repayments from salary",
      "Available to salaried employees",
    ],
    color: "emerald",
  },
  {
    id: "asset-loan",
    icon: "Target",
    title: "Asset Loan",
    description:
      "Our asset loans carry an interest rate of 10% and help clients purchase valuable assets such as vehicles, equipment, electronics, machinery, and more. The asset being purchased may serve as security for the loan, and we offer convenient, structured payment options.",
    features: [
      "10% interest rate",
      "Vehicles, equipment & electronics",
      "Machinery & clearing of goods",
      "Asset may serve as loan security",
      "Convenient structured payment options",
    ],
    color: "gold",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Jonathan Hargreaves",
    role: "Chief Executive Officer",
    bio: "With 25+ years of financial leadership, Jonathan has guided Prudent Capital to become a trusted name in corporate finance and investment advisory.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&auto=format&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "j.hargreaves@prudentcapital.com",
  },
  {
    id: "2",
    name: "Sophia Chen",
    role: "Chief Investment Officer",
    bio: "Sophia leads our investment strategy with a track record of consistently outperforming benchmarks across diverse asset classes and market cycles.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&q=80&auto=format&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "s.chen@prudentcapital.com",
  },
  {
    id: "3",
    name: "Marcus Williams",
    role: "Managing Director, Capital Markets",
    bio: "Marcus brings 18 years of capital markets expertise, having structured over $2B in transactions across private equity and debt markets.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&q=80&auto=format&fit=crop&crop=face",
    linkedin: "#",
    email: "m.williams@prudentcapital.com",
  },
  {
    id: "4",
    name: "Isabelle Fontaine",
    role: "Head of Risk & Compliance",
    bio: "Isabelle's expertise in regulatory frameworks ensures our clients maintain the highest standards of governance and risk management.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&q=80&auto=format&fit=crop&crop=face",
    linkedin: "#",
    email: "i.fontaine@prudentcapital.com",
  },
  {
    id: "5",
    name: "Richard Ashford",
    role: "Director, Strategic Advisory",
    bio: "Richard specializes in M&A transactions and strategic transformations, advising Fortune 500 companies through complex business challenges.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&q=80&auto=format&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "r.ashford@prudentcapital.com",
  },
  {
    id: "6",
    name: "Amara Okonkwo",
    role: "Head of Client Relations",
    bio: "Amara's dedication to client success has earned Prudent Capital a 98% retention rate, building relationships grounded in trust and results.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&auto=format&fit=crop&crop=face",
    linkedin: "#",
    email: "a.okonkwo@prudentcapital.com",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "James Rothbury",
    role: "CEO",
    company: "Northgate Industries",
    content:
      "Prudent Capital transformed our approach to capital allocation. Their strategic insights helped us close a $180M acquisition that has since been instrumental to our growth trajectory.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531427186611-141f9f1434e8?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Catherine Laurent",
    role: "CFO",
    company: "Horizon Tech Group",
    content:
      "Their risk management framework gave us confidence to expand into three new markets simultaneously. Truly exceptional professionals who deliver on their commitments.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Daniel Osei",
    role: "Founder & Managing Partner",
    company: "Zenith Capital Partners",
    content:
      "Working with Prudent Capital is an experience in excellence. Their market analysis capabilities are unmatched, and they consistently provided insights that gave us a competitive edge.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Priya Mehta",
    role: "Chairman",
    company: "Meridian Holdings",
    content:
      "Their investment advisory team helped us restructure our portfolio, achieving a 32% improvement in risk-adjusted returns. We consider them a strategic extension of our own team.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&q=80&auto=format&fit=crop&crop=face",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Who does Prudent Micro Credit serve?",
    answer:
      "We serve a broad range of clients including small business owners, entrepreneurs, salary earners, and individuals seeking asset financing. Our solutions are designed to be accessible and tailored to your specific financial needs and goals.",
  },
  {
    question: "What types of credit products does Prudent Micro Credit offer?",
    answer:
      "We offer a range of microcredit products including business loans for small enterprises, personal loans for salary earners, asset financing for equipment and vehicles, and entrepreneurial starter packages. Each product is structured to support your growth at every stage.",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "Getting started is simple. Visit any of our branches or contact us via phone or email to speak with one of our dedicated credit officers. We will guide you through a straightforward application process and ensure you receive a decision promptly.",
  },
  {
    question: "What are the repayment terms like?",
    answer:
      "Our rates are competitive and transparent. We believe in clear pricing with no hidden charges. Repayment terms are flexible and designed to align with your cash flow. Our credit officers will work with you to find the most suitable repayment structure.",
  },
  {
    question: "How does Prudent Micro Credit ensure responsible lending?",
    answer:
      "We conduct thorough but fair credit assessments to ensure every loan we approve is within the client's ability to repay comfortably. Our commitment to responsible lending is grounded in our core values of integrity, accountability, and long-term client value creation.",
  },
  {
    question: "Can Prudent Micro Credit support my small business growth?",
    answer:
      "Absolutely. Supporting small businesses and entrepreneurs is central to our mission. We offer tailored business financing solutions, flexible repayment schedules, and dedicated relationship officers who understand the unique challenges and opportunities of growing a business.",
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    icon: "Award",
    title: "Service Excellence",
    description:
      "We are committed to delivering exceptional and professional services while continuously striving for excellence in everything we do.",
  },
  {
    icon: "Shield",
    title: "Accountability",
    description:
      "We take responsibility for our actions and remain committed to serving our clients with transparency and dedication.",
  },
  {
    icon: "Scale",
    title: "Integrity",
    description:
      "We uphold honesty, ethical conduct, and trustworthiness in all our interactions and decisions.",
  },
  {
    icon: "HeartHandshake",
    title: "Client Value Creation",
    description:
      "We help our clients grow and succeed by providing relevant financial solutions and building long-term relationships based on value and trust.",
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1996",
    title: "Foundation",
    description:
      "Prudent Capital was established in London by three financial veterans with a shared vision: redefining what a financial advisory firm could be.",
  },
  {
    year: "2002",
    title: "Global Expansion",
    description:
      "Opened our first international offices in New York and Singapore, serving clients across three continents.",
  },
  {
    year: "2008",
    title: "Navigating the Crisis",
    description:
      "Successfully guided 200+ clients through the global financial crisis with zero capital losses, cementing our reputation for resilient advisory.",
  },
  {
    year: "2014",
    title: "Capital Markets Launch",
    description:
      "Launched our dedicated Capital Markets division, completing our full-service offering for institutional and corporate clients.",
  },
  {
    year: "2019",
    title: "$1 Billion AUM Milestone",
    description:
      "Reached $1 billion in assets under advisory management, a testament to our clients' trust and our consistent performance.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Invested in proprietary analytics platforms to deliver real-time intelligence and data-driven insights to our growing global client base.",
  },
];

export const TRUST_CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Modern Prudent Capital office",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604082-7649a2cd2b20?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Team collaboration session",
  },
  {
    src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Financial data analysis",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Executive meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Client consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Financial planning",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Happy client team",
  },
  {
    src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Team success",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Professional staff",
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&q=80&auto=format&fit=crop",
    alt: "Investment research",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Proven Track Record",
    description: "28 years of consistent performance, including navigating three global recessions without client capital loss.",
  },
  {
    icon: "Globe",
    title: "Global Network",
    description: "Access to relationships spanning 40+ countries, providing unparalleled deal flow and market intelligence.",
  },
  {
    icon: "Lock",
    title: "Fiduciary Standard",
    description: "We are legally and ethically bound to act in your best interest, always and without exception.",
  },
  {
    icon: "Zap",
    title: "Rapid Execution",
    description: "Our streamlined processes and experienced teams ensure swift execution without sacrificing quality.",
  },
  {
    icon: "HeartHandshake",
    title: "White-Glove Service",
    description: "Each client receives a dedicated relationship team, ensuring personalized attention and priority access.",
  },
  {
    icon: "BarChart2",
    title: "Data-Driven Insights",
    description: "Proprietary analytics and real-time market intelligence underpin every recommendation we make.",
  },
];
